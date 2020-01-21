const mongoose = require('mongoose'),
    User = mongoose.model('Quotes');

module.exports = 
{
    index: function(req, res)
    {
    	res.render("index");
    },
    
    create: function(req, res)
    {
    	console.log(req.body)
        const user= new User();
        user.name=req.body.name;
        user.quote=req.body.quote;
        user.save()
        .then(res.redirect('/quotes'))
        .catch(err => console.log(err));
    },
    
    read: function(req, res)
    {
    	User.find()
        .then(data => res.render("quotes", {users:data}))
        .catch(err => res.json(err));
    }
};