const express = require('express');
const cors = require('cors');
const app = express();
const indexRouter = require('./server.js');
const port = 8000;
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(indexRouter);

app.listen(port, () => {
  console.log(`Running server listening at http://localhost:${port}`);
});
