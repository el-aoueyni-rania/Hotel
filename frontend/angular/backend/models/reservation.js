const mongoose = require ('mongoose');

const reservationSchema = new mongoose.Schema({

clientname :{type: string, required: true},
datearrivee:{type: string, required: true},
nbrnuits:{type: number, required: true},
nbrenfants:{type: number, required: true},
nbradultes:{type: number, required: true},
nbrchambres:{type: number, required: true},

});

module.exports = mongoose.model('Reservation', reservationSchema);