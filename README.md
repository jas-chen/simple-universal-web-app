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
To deal with the issue of requiring css files on the server side and support css modules on the server side,
this demo builds the main React component `App` into a node.js module for the server to require.


It will build `App` twice, that's a trad off :stuck_out_tongue_winking_eye:.



#### Not included
- Auto reload browser
- Build for production


#### License

The MIT License (MIT)
