const express = require('express');
const app = express()
const indexRouter  = require('./server.js');
const port = 8000;
app.use(indexRouter);

app.listen(port, () => {
	console.log(`Running server listening at http://localhost:${port}`)
})