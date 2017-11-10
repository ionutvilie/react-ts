package main

import (
	"fmt"

	"github.com/kataras/iris"

	"github.com/iris-contrib/middleware/cors"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
)

func setCORSAlowAll(ctx iris.Context) iris.Context {
	ctx.Header("Access-Control-Allow-Headers", "Accept, Authorization, Content-Type, Origin")
	ctx.Header("Access-Control-Allow-Headers", "Accept, Authorization, Content-Type, Origin")
	ctx.Header("Access-Control-Allow-Methods", "GET, OPTIONS")
	ctx.Header("Access-Control-Allow-Origin", "*")
	ctx.Header("Access-Control-Expose-Headers", "Date")
	return ctx
}

func newApp() *iris.Application {
	app := iris.New()

	app.Use(recover.New())
	app.Use(logger.New())

	app.OnErrorCode(404, func(ctx iris.Context) {
		app.Logger().Info(fmt.Sprintf("%v", ctx.GetStatusCode()), " : ", ctx.Path())
		// ctx.Exec("GET", "/web")
	})

	app.RegisterView(iris.HTML("./web", ".html").Binary(Asset, AssetNames))
	app.Get("/web", func(ctx iris.Context) {
		ctx.View("index.html")
	})

// 	assetHandler := app.StaticEmbeddedHandler("web", Asset, AssetNames)
// 	app.SPA(assetHandler) or
	app.StaticEmbedded("/", "./web", Asset, AssetNames)

	app.Get(".well-known", func(ctx iris.Context) {
		ctx.WriteString("OK")
	})
	app.Get(".well-known/ready", func(ctx iris.Context) {
		ctx.WriteString("OK")
	})
	app.Get(".well-known/live", func(ctx iris.Context) {
		ctx.WriteString("OK")
	})
	app.Get(".well-known/metrics", func(ctx iris.Context) {
		ctx.StatusCode(200)
	})

	v1 := app.Party("/api/v1")
	// v1.Use(crs)  /// does not work
	{
		v1.Get("/home", func(ctx iris.Context) {
			result := `[{ "label": "foo", "href": "bar" }, { "label": "bar", "href": "foo" }]`
			ctx = setCORSAlowAll(ctx)
			ctx.Header("Age", "0")
			ctx.ContentType("application/json")
			ctx.WriteString(string(result))
		})
	}
	crs := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // allows everything, use that to change the hosts.
		AllowCredentials: true,
	})

	v2 := app.Party("/api/v2")
	v2.Use(crs)
	{
		v2.Get("/home", func(ctx iris.Context) {
			result := `[{ "label": "foo", "href": "bar" }, { "label": "bar", "href": "foo" }]`
			ctx.Header("Age", "0")
			ctx.ContentType("application/json")
			ctx.WriteString(result)
		})

	}
	return app
}

func main() {
	app := newApp()
	app.Run(iris.Addr(":8080"))
}
