const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const port = process.env.API_PORT;

const prisma = require('./database/prisma'); // Adicionei nova linha para conectar o Prisma

const usuarioRouter = require('./routers/UsuarioRouter');
const ocorrenciaRouter = require('./routers/OcorrenciaRouter');

app.use('/usuarios', usuarioRouter);
app.use('/ocorrencias', ocorrenciaRouter);

app.listen(port, () => {
  console.log(`Exemplo app listando na porta ${port}`);
});
