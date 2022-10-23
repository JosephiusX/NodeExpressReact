const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; // same as above

const userSchema = new Schema({
  googleId: String,
  name: String
});

// create the collection if it dosent already exist
mongoose.model('users', userSchema) 