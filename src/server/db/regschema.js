const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  login: String,
  password: String,
});

module.exports = mongoose.model('RegistrationModel', FormSchema);
