const express = require('express');
const router = express.Router();

const Reservation = require('./../models/Reservation');



router.get('/',(req, res) => {
    Reservation.find()
      .then(reservations => res.status(200).json(reservations))
      .catch(err => res.status(400).json({error: err.message}));
 });
router.get('/:id',(req, res, next) => {
    Reservation.findOne({ _id: req.params.id })
        .then(reservation => res.status(200).json(reservation))
        .catch(error => res.status(404).json({ error }));
    });


module.exports = router;