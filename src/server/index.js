import path from 'path';
import express from 'express';
import React from 'react';
import ReactServer from 'react-dom/server';
import App from 'shared/view/App';

const app = express();
const NODE_PORT = process.env.NODE_PORT || 3000;
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';

function renderHtml(element) {
  const app = ReactServer.renderToString(element);

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello</title>
    <link rel="stylesheet" href="/static/main.css">
  </head>
  <body>
    <div id="app">${app}</div>
    <script src="/static/client.js"></script>
  </body>
</html>`;
}

const staticPath = path.join(process.cwd(), './build/www');

app.use(express.static(staticPath));

app.get('/*', function (req, res, next) {
  if (req.accepts('html') && req.originalUrl !== '/favicon.ico') {
    res.send(renderHtml(<App />));
  } else {
    next();
  }
});

app.listen(NODE_PORT, NODE_HOST, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`);
  }
});
