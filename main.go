package main

import (
	"fmt"

	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
)

func newApp() *iris.Application {
	app := iris.New()
	app.Use(recover.New())
	app.Use(logger.New())

	// Method:   GET
	// Resource: http://localhost:8080
	// app.StaticEmbedded("/{dummy:string}", "./static", Asset, AssetNames)
	// app.StaticWeb("/web", "./build")
	// app.Handle("GET", "/", func(ctx iris.Context) {
	// 	ctx.HTML("<h1>Welcome</h1>")
	// 	ctx.
	// })

	// var page = struct {
	// 	Title string
	// }{"Welcome"}

	app.OnErrorCode(404, func(ctx iris.Context) {
		app.Logger().Info(fmt.Sprintf("%v", ctx.GetStatusCode()) + " : " + ctx.Path())
		ctx.Exec("GET", "/web")
	})

	// app.RegisterView(iris.HTML("build", ".html").Binary(Asset, AssetNames))

	// app.Get("/", func(ctx iris.Context) {
	// 	ctx.ViewData("Page", page)
	// 	ctx.View("index.html")
	// })

	// assetHandler := app.StaticEmbeddedHandler("build", Asset, AssetNames)
	// as an alternative of SPA you can take a look at the /routing/dynamic-path/root-wildcard
	// example too
	// app.SPA(assetHandler)

	app.Get("/", func(ctx iris.Context) {
		ctx.Redirect("/web")
	})

	app.StaticWeb("/web", "./build/")

	app.Get("/ping", func(ctx iris.Context) {
		ctx.WriteString("pong")
	})

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
	return app
}

func main() {
	app := newApp()
	fmt.Println(app.GetRoutes())
	app.Run(iris.Addr(":9090"))
}
