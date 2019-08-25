const mongoose = require('mongoose');
module.exports = mongoose.model('Sensor', new mongoose.Schema({
temperature: Number
}));