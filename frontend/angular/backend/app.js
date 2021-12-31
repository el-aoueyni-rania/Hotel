const express = require ('express');

const mongoose =require('mongoose');
const Reservation = require('./models/Reservation');


const app= express();


mongoose.connect('mongodb://localhost:27017/Hotel',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

app.use((req,res,next)=> {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH,OPTIONS');
   next();

});

app.get('/api/reservations',(req, res)=>{
   
    Reservation.find()
       .then(reservations => res.status(200).json(reservations))
       .catch(err => res.status(400).json({error: err.message}));

});

module.exports =app;