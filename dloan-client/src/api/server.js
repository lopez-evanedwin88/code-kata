const express = require('express');
const router = express.Router();
  
router.use('/balance-sheet', require('./accountingSoftware'));
router.use('/decision-engine', require('./decisionEngine.js'));

module.exports = router;
