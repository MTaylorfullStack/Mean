controller= require('../controllers/controllers.js');

module.exports=(app)=>
{
    app.get('/', (req, res) => 
    {
        controller.index(req,res);
    });

    app.post('/quotes', (req, res) => 
    {
       controller.create(req, res)
    });

    app.get('/quotes', (req, res) => 
    {
        controller.read(req, res);
    });
}