controller= require('../controllers/controllers.js');

module.exports=(app)=>
{
    app.get('/', (req, res) => 
    {
        controller.index(req,res);
    });
}