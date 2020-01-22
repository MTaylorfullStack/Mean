const mongoose = require('mongoose'),
    User = mongoose.model('Quotes');

module.exports = 
{
    index: function(req, res)
    {
    	res.json("");
    },
};