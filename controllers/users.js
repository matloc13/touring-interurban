const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const User = require('../models/users');


router.get('/new', (req, res) => {
  res.render('users/new.ejs');
});

// router.get('/:id/edit', (req, res) => {
//   User.findById(req.params.id, req.body, (err, updateUser) => {
//     res.render('users/edit.ejs', {
//       currentUser: req.session.currentUser,
//       user: req.body
//     });
//   })
//
// });
router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, newUser) => {

    req.session.currentUser = newUser;
    res.redirect('/');
  })
});

// router.put('/edit', (req, res) => {
//   User.findByIdAndUpdate(req.body.id, req.body, {
//     $set {
//       img: req.body.img
//     }
//   }, (err, user) => {
//     res.redirect('/');
//   })
// });



module.exports = router;