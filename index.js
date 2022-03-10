const express = require('express');
const { use } = require('./routes/index');
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

let app = express();

app.use(routesIndex);
app.use(routesUsers)

app.listen(3000, '127.0.0.1', ()=> {

    console.log('Servidor rodando');

})

