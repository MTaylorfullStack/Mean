// Dependencies
const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path');

// Create express app
const app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.use(express.static(path.join(__dirname, './public/dist/public')));


mongoose.connect('mongodb://localhost/dashboard', {useNewUrlParser: true});

const CatSchema = new mongoose.Schema({
  name: String,
  age: String,
  breed: String,
  location: String
 })
 const Cat = mongoose.model('dashboard', CatSchema);

 app.get('/cats', (req, res) => {
  Cat.find()
    .then(cats => res.json({message:"success", cats:cats}))
    .catch(err => res.json(err));
});

app.get('/cats/new', (req, res) => {
  res.render("newCat");
});

app.get('/cats/edit/:id', (req, res) => {
  Cat.find({id:req.params.id})
    .then(cat=>res.json("newCat", {cat:cat}))
    .catch(err=>res.json(err));
});

app.get('/cats/:id', (req, res) => {
  Cat.find({id:req.params.id})
    .then(cat=>res.render("cat", {cat:cat}))
    .catch(err=>res.json(err));
});

app.post('/cats', (req,res) => {
  console.log(req.body);
  Cat.create(req.body)
    .then(res.redirect("/"))
    .catch(err=>res.json(err));
});

app.post('cats/:id', (req,res) => {
  Cat.update({id:req.params.id}, req.body)
  .then(res.redirect("/"))
  .catch(err=>res.json(err));
});

app.post('cats/destroy/:id', (req,res) => {
  Cat.remove({id:req.params.id})
    .then(res.redirect("/"))
    .catch(err=>res.json(err));
});
app.listen(8000, () => console.log("listening on port 8000"));