const express = require('express');
const router = express.Router();

const User = require('../models/users')

router.get('/new', (req, res) => {
  res.render('sessions/new.ejs');
});

router.post('/', (req, res) => {

  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (req.body.password === user.password) {
      req.session.currentUser = user;
      res.redirect('/');
    } else {
      res.send('wrong password')
    }
  })
});

router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  })
});


module.exports = router;