const mongoose = require('mongoose');

mongoose.promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/authPractice');

