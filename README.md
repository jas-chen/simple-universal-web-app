# Simple universal web app demo

#### What's inside:

- React
- Express
- Webpack
- Babel
  - ES2015
  - JSX
- PostCSS (autoprefixer and cssnano in this demo)
- [CSS Modules](http://glenmaddern.com/articles/css-modules) (global css is dead!)
- Extract css to `.css` file


#### How to run
```
npm install

# watch and build server.js and client.js, main.css
npm run watch

# start node.js server
npm run dev

open http://localhost:3000
```

#### How does it work?
This approach builds main React component `App` into a node.js module, and required by `server.js`.
In this way we can avoid that node.js can't require .css files.

But we build `App` twice, that's a trad off.



#### Todo
- Webpack-dev-server
- Build for production


#### License

The MIT License (MIT)
