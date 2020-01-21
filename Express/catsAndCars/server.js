class Cat
{
    constructor(name, food, sleep)
    {
        this.name= name;
        this.food= food;
        this.sleep=sleep;
    }
}

const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (request, response) => {
    response.send("Hello Express");
})
app.get("/cars", (req, res) => {
    res.render('cars');
})
app.get("/cats", (req, res) => {
    res.render('cats');
})
app.get("/newCar", (req, res) => {
    res.render('newCar');
})

app.get("/cats/1", (req, res) => {
    
    let cat= new Cat("Simba", "Chicken", ['Bed', 'Chair'])
    res.render('cat', {cat:cat});
})

app.get("/cats/2", (req, res) => {
    let cat= new Cat("Oliver", "Fish", ['Couch', 'Laptop'])
    res.render('cat', {cat:cat});
})

app.get("/cats/3", (req, res) => {
    let cat= new Cat("Socks", "Pork", ['Lap', 'Window Sill'])
    res.render('cat', {cat:cat});
})

app.listen(8000, () => console.log("listening on port 8000"));
