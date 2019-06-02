const express = require('express');
const router = express.Router();

const User = require('../models/users');
const Trip = require('../models/trips');


router.get('/new', (req, res) => {
  res.render('trips/new.ejs');
});

router.post('/', (req, res) => {

  Trip.create(req.body, (err, newRoute) => {
    if (err) {
      console.log('something is not rtihr');
    } else {
      console.log(newRoute);
      res.render('trips/progress.ejs', {
        trip: newRoute
      });
    }
  });

});

// router.put('/:id', (req, res) => {
//   Route.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     },
//     (err, stopTime) => {
//       res.render('trips/show.ejs', {
//         trip: stopTime
//       });
//     })
// });

module.exports = router