const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageBoard', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
  name: String,
  quote: String
 })
 const User = mongoose.model('messageBoard', UserSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
   res.send("Hello Express");
 });

 app.listen(8000, () => console.log("listening on port 8000"));