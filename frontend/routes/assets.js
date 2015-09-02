var express = require('express');
var router = express.Router();
var requestify = require('requestify');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Frontend request received');
  requestify.get('http://lb_api/assets', {headers: req.headers}).then(function(response) {
    res.json({raw: response, json: response.getBody()});
  });
});

module.exports = router;
