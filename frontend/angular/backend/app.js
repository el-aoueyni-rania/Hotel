const express = require ('express');

const mongoose =require('mongoose');

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
   
    const reservations = [
        {    
            id : "1",
            clientname :"aya",
            datearrivee :"10-04-2000",
            nbrnuits : 4,
            nbrenfants : 3,
            nbradultes : 2,
            nbrchambres : 4,
        },
        {    
            id :"2",
            clientname :"aya",
            datearrivee :"10-04-2000",
            nbrnuits : 4,
            nbrenfants : 3,
            nbradultes : 2,
            nbrchambres : 4,
        },
        {
            id :"3",
            clientname :"aya",
            datearrivee :"10-04-2000",
            nbrnuits : 4,
            nbrenfants : 3,
            nbradultes : 2,
            nbrchambres : 4,
        },
        {
            id :"4",
            clientname :"aya",
            datearrivee :"10-04-2000",
            nbrnuits : 4,
            nbrenfants : 3,
            nbradultes : 2,
            nbrchambres : 4,
        },
        {   
             id :"5",
            clientname :"aya",
            datearrivee :"10-04-2000",
            nbrnuits : 4,
            nbrenfants : 3,
            nbradultes : 2,
            nbrchambres : 4,
        },
    
    ];

    res.json(reservations);
});

module.exports =app;