const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
  items: [String]
});

module.exports = mongoose.model('Vendor', vendorSchema);
