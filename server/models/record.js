const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    filename: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Record', recordSchema);
