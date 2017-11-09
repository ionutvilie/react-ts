# Typescript-React Demo App

it contains some errors that i know of :) 

## Quick Install:

```bash
git clone [current git repo]
cd react-ts
npm install
npm run-script start # for development
npm run-script build # for building a production deployment
```

check project example pages


## Components:
 - typescript: for generating typesafe javascript
 - react, react-dom, react-router-dom
 - react-md
 - webpack

## Helpful links:
  - https://react-md.mlaursen.com/
  - https://www.typescriptlang.org/
  - ...

## Folder Structure


```bash
react-ts
  build/
  public/            
  src/
    components         # components folder
      members          # members page/module
      About.tsx        # demo page
      Header.tsx
      Hello.tsx        # demo page
      index.ts   
    css                # folder for generating css from sass
    data               # some component data
    icons
    scss               # extra styles for overwriting default ones
    App.tsx            # application
    AppRouter.tsx      # application router
    index.scss         # entry point for sass 
    index.tsx          # entry point for the app
  dist/              
  node_modules/
  package-lock.json
  tslint.json          # typescript linter config file
  package.json         # npm config
  readme.md         
  tsconfig.json        # typescript config
  webpack.config.js    # webpack config
```
