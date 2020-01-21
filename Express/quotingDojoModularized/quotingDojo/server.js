const express = require("express"),
    mongoose = require('mongoose'),
    app = express();
    bodyParser = require('body-parser');
    path = require('path');

mongoose.connect('mongodb://localhost/Quotes', {useUnifiedTopology: true, useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/server/views/static')));
app.set('views', path.join(__dirname + '/server/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));