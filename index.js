const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes/info_form');
const app = express();

app.use(express.json());
app.use(router);

mongoose.connect('mongodb://localhost:27017/infinityfirst', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('strictQuery', false);

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
