const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/streetbites', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Vendor = require('./models/Vendor');

app.get('/vendors', async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
});

app.post('/vendors', async (req, res) => {
  const vendor = new Vendor(req.body);
  await vendor.save();
  res.json(vendor);
});

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
