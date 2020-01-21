const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    quote: String
   })
const User = mongoose.model('Quotes', UserSchema);