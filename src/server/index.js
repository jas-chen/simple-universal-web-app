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
  </head>
  <body>
    <div id="app">${app}</div>
  </body>
</html>`;
}

app.get('/', (req, res) => {
  res.send(renderHtml(<App />));
});

app.listen(NODE_PORT, NODE_HOST, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`);
  }
});
