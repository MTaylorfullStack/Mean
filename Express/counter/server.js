const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));

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
    if('times' in req.session)
    {
        req.session.times++;
    }
    else
    {
        req.session.times=1;
    }
    res.render("index.ejs",{times:req.session.times})
 });

 app.get('/2', (req, res) => {
    
        req.session.times+=2;
    
    res.render("index.ejs",{times:req.session.times})
 });

 app.get('/clear', (req, res) => {
    
    req.session.times=0;

res.redirect('/');
});
 app.listen(8000, () => console.log("listening on port 8000"));