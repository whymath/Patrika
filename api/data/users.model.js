var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    //required: true
  },
  role: {
    type: String
  },
  email: {
    type: String
  },
  team: {
    type: String
  },
  password:{
    type: String
  }
});

mongoose.model('users', userSchema);
