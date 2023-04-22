const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
	res.send('decisonEngine?');
})

module.exports = router;
