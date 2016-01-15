import express from 'express';

const app = express();
const NODE_PORT = process.env.NODE_PORT || 3000;
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(NODE_PORT, NODE_HOST, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`);
  }
});
