const express = require('express');
const router = express.Router();

const User = require('../models/users');
const Route = require('../models/routes');


router.get('/new', (req, res) => {
  res.render('routes/new.ejs');
});

module.exports = router