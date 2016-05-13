// ••• modules •••
var express = require('express');
var router = express.Router();

// ••• routes •••
router.get('/', function(req, res) {
  res.render('index');
});

// ••• exports •••

module.exports = router;
