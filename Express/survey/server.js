const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
   res.render('index');
 });

 app.post('/result', (req, res) => {
  req.session.formData=req.body;
  console.log(req.body);
  res.redirect('/results');
});

app.get('/results', (req, res) => {
  res.render('results', {user:req.session.formData});
});

 app.listen(8000, () => console.log("listening on port 8000"));