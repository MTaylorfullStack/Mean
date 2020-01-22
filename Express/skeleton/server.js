const express = require("express"),
    mongoose = require('mongoose'),
    app = express();
    bodyParser = require('body-parser');
    path = require('path');

    app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'index.html')));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/rateMyCakesDB', {useUnifiedTopology: true, useNewUrlParser: true});

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));