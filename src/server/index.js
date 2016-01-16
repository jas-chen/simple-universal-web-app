'use strict';

const path = require('path');
const express = require('express');
const React = require('react');
const ReactServer = require('react-dom/server');
const app = express();

let App = require('../../build/App');

// handle ES2015 module
if (App.__esModule && App.default) {
  App = App.default;
}


const NODE_PORT = process.env.NODE_PORT || 3000;
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';

function renderHtml(state) {
  const element = React.createElement(App, state);
  const app = ReactServer.renderToString(element);

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello</title>
    <link rel="stylesheet" href="/static/style.css">
    <script>
      window.__state = ${JSON.stringify(state)} ;
    </script>
  </head>
  <body>
    <div id="app">${app}</div>
    <script src="/static/client.js"></script>
  </body>
</html>`;
}

const staticPath = path.join(__dirname, '../../build/www');

app.use(express.static(staticPath));

app.get('/', function (req, res) {
  const state = {
    num: Math.floor(Math.random() * 100)
  };

  res.send(renderHtml(state));
});

app.listen(NODE_PORT, NODE_HOST, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`);
  }
});
