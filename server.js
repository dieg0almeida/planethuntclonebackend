//setar as variaveis de ambiente
require("dotenv").config();


const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// iniciando a aplicação
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o bando de dados
//var urlConnection = "mongodb://localhost:27017/node";


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
requireDir('./src/models');


// primeira rota
app.use('/api', require('./src/routes'));


// iniciando o servidor
app.listen(process.env.PORT || 3001);