var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/rateMyCakesDB', {useUnifiedTopology: true, useNewUrlParser: true});
const db=mongoose.connection;
db.on("err", (err)=>{
    console.log(`error during connection ${err}`);
})
db.on("good", ()=>{
    console.log(`we're connected`);
})

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file)
{
    if(file.indexOf('.js')>= 0)
    {
        require(models_path + '/' + file)
    }
});