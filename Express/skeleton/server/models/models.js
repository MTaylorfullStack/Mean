const mongoose = require('mongoose');
const TABLESCHEMA = new mongoose.Schema({
    DATAMEMBER1: String,
    DATAMEMBER2: String
   })
const User = mongoose.model('DBNAME', TABLESCHEMA);

module.exports = {User: User}