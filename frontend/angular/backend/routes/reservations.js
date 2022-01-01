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
    router.post('/',(req, res, next) => {
        const reservation = new Reservation({
          ...req.body
        });
        reservation.save()
        .then(() => res.status(201).json({ message: 'Reservation created  !'}))
        .catch(error => res.status(400).json({ error }));
    });


    router.put( '/:id', (req, res, next) => {
        Reservation.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Reservation updated !'}))
          .catch(error => res.status(400).json({ error }));
      });


module.exports = router;