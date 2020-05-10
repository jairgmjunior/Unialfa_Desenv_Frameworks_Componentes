const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/*

Se for pra produção tem que informar quem está permitido a acessar a API

app.use(cors({
    origin : 'http://meuapp.com'
}));
*/

app.use(cors());// em desenvolvimento
app.use(express.json());
app.use(routes);

app.listen(3333);