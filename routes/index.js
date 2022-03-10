let express = require('express');
let routes = express.Router();

routes.get('/',(req, res) =>{

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Servidor criado por MenezesC137</h1>');

})

module.exports = routes;