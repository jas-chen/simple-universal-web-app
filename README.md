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
- Send `state` from backend to frontend


#### How to run
```
npm install

# watch and build
npm run watch

# start node.js server
npm run dev

open http://localhost:3000
```

#### How does it work?
This approach builds main React component `App` into a node.js module, and required by `server.js`.
Avoid that node.js can't require .css files, and also support using css modules in server side nicely. [See the discussion of using css modules on server side](https://github.com/css-modules/css-modules/issues/9).

But it will build `App` twice, that's a trad off :stuck_out_tongue_winking_eye:.



#### Todo
- Webpack-dev-server
- Build for production


#### License

The MIT License (MIT)
