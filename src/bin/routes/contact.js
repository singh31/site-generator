const express = require('express');
const path = require('path');
const fs = require('fs');
const _dataPath = path.join(__dirname,'../../data/contact.json');
var router = express.Router();

const _contact = JSON.parse(
  fs.readFileSync(_dataPath));


router.use('/', (req, res, next) => {
  res.render('contact',
  {
    contact : _contact
  }
  );
});


module.exports = router;