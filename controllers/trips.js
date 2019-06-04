const express = require('express');
const router = express.Router();

const User = require('../models/users');
const Trip = require('../models/trips');

//routes

// index of trips
router.get('/', (req, res) => {
  Trip.find({}, (err, trips) => {
    if (req.session.currentUser) {
      res.render('trips/index.ejs', {
        currentUser: req.session.currentUser,
        trip: trips
      });
    } else {
      res.redirect('/sessions/new');
    }
  })


});

// new trip

router.get('/new', (req, res) => {
  res.render('trips/new.ejs', {
    currentUser: req.session.currentUser
  });
});

// start trip

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

// edit trip description

router.get('/:id/edit', (req, res) => {
  Trip.findById(req.params.id, req.body, (err, trip) => {
    if (err) {
      console.log('cannot find');
    } else {
      res.render('trips/edit.ejs', {
        trip: trip
      });
    }
  })
});

// save trip

router.put('/:id/edit', (req, res) => {
  Trip.findByIdAndUpdate(req.params.id, req.body, {
    $set: {
      description: req.params.description,
      yourTime: req.param.yourTime
    }
  }, (err, tripDescription) => {
    if (err) {
      console.log('not saved');
    } else {
      // res.send(req.body)
      res.redirect('/trips');;
    }
  })
});

// stop current trip

router.put('/:id', (req, res) => {

  Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    },
    (err, stopTime) => {
      // res.send(stopTime)
      res.render('trips/show.ejs', {
        trip: stopTime
      });
    })
});



module.exports = router