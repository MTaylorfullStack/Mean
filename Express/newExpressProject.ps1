$projectName=$args[0]
New-Item -Path . -Name $projectName -ItemType "directory"
Set-Location $projectName
& npm init -y
& npm i express ejs mongoose  body-parser --save

New-Item -Path . -Name "static" -ItemType "directory"
New-Item -Path . -Name "views" -ItemType "directory"
New-Item -Path . -Name "server.js" -ItemType "file" -Value "const express = require(`"express`");
const app = express();
app.use(express.static(__dirname + `"/static`"));
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/$args', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
  name: String,
  quote: String
 })
 const User = mongoose.model('$args', UserSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
   res.send(`"Hello Express`");
 });

 app.listen(8000, () => console.log(`"listening on port 8000`"));"