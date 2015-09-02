var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('API request received');
  res.json({data: 'Hello world!'});
});

module.exports = router;
