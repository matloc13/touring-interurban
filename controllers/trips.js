const express = require('express');
const router = express.Router();
const moment = require('moment');

const User = require('../models/users');
const Trip = require('../models/trips');

//routes

// index of trips
router.get('/', (req, res) => {
  Trip.find({
      favorite: true
    },

    (err, trips) => {
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

router.get('/:id/edit/description', (req, res) => {


  Trip.findById(req.params.id, req.body, (err, trip) => {
    if (err) {
      console.log('cannot find');
    } else {
      res.render('trips/editDescription.ejs', {
        trip: trip
      });
    }
  })
});

router.get('/:id/edit', (req, res) => {

  Trip.findById(req.params.id, req.body, (err, trip) => {
    if (err) {
      res.send('did not save');
    } else {
      res.render('trips/edit.ejs', {
        trip: trip
      });
    }
  })
});

// show trip

router.get('/:id/show', (req, res) => {
  Trip.findById(req.params.id, req.body, (err, tripItem) => {
    if (err) {
      console.log('cannot find trip');
    } else {
      res.render('trips/showItem.ejs', {
        trip: tripItem,
        currentUser: req.session.currentUser,
        moment: moment
      });
    }
  })
});

// user trips

router.get('/user', (req, res) => {
  console.log(req.session.currentUser);
  let usersession = req.session.currentUser;

  Trip.find({
      username: usersession.username,
      yourTime: {
        $gte: 120

      }
    },
    (err, trip) => {
      res.render('trips/user.ejs', {
        trip: trip,
        currentUser: req.session.currentUser
      });

    })
});

// edit prevoius trip description

router.put('/:id/edit/description', (req, res) => {
  console.log(req.body);
  if (req.body.favorite === 'on' || req.body.favorite === true) {
    req.body.favorite = true;
  } else {
    req.body.favorite = false;
  }
  Trip.findByIdAndUpdate(req.params.id, req.body, {
    $set: {
      description: req.params.description,
      favorite: req.body.favorite
    }
  }, (err, tripDescription) => {
    if (err) {
      res.send('did not update')
    } else {
      res.redirect('/trips');
    }

  })
});

router.put('/:id/edit/favorite', (req, res) => {
  console.log(req.body);
  if (req.body.favorite === 'on' || req.body.favorite === true) {
    req.body.favorite = true;
  } else {
    req.body.favorite = false;
  }
  Trip.findByIdAndUpdate(req.params.id, req.body, {
    $set: {
      favorite: req.body.favorite
    }
  }, (err, tripDescription) => {
    if (err) {
      res.send('did not update')
    } else {
      res.redirect('/trips');
    }

  })
});

// save trip

router.put('/:id/edit', (req, res) => {

  Trip.findByIdAndUpdate(req.params.id, req.body, {
    $set: {
      description: req.params.description,
      yourTime: req.params.yourTime

    }
  }, (err, trip) => {
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
        trip: stopTime,
        currentUser: req.session.currentUser
      });
    })
});

router.delete('/:id', (req, res) => {
  Trip.findByIdAndRemove(req.params.id, (err, trip) => {
    if (err) {
      console.log('could not delete');
    } else {
      res.redirect('/trips');
    }
  })
});



module.exports = router