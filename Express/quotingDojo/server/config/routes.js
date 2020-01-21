const mongoose = require('mongoose'),
    quotes= require('../controllers/controllers.js'),
    User = mongoose.model('Quotes');

module.exports=(app)=>
{
    app.get('/', (req, res) => 
    {
        quotes.index(req,res);
    });

    app.post('/quotes', (req, res) => 
    {
       quotes.create(req, res)
    });

    app.get('/quotes', (req, res) => 
    {
        quotes.read(req, res);
    });
}