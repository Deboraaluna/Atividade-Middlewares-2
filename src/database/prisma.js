// database/prisma.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function conectar() {
  try {
    await prisma.$connect();
    console.log('A conexão foi bem estabelecida.');
  } catch (error) {
    console.error('Houve um erro de conexão com a base de dados:', error);
  }
}

conectar();

module.exports = prisma;
