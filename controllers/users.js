const express = require('express');

const router = express.Router();

const User = require('../models/users');


router.get('/', (req, res) => {
  res.render('users/new.ejs');
});

app.post('/', (req, res) => {

  User.create(req.body, (err, newUser) => {

    res.redirect('/');
  })
});



module.exports = router;