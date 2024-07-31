const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarOcorrencias = async (req, res) => {
  const ocorrencias = await prisma.ocorrencia.findMany();
  res.json(ocorrencias);
}

const criarOcorrencia = async (req, res) => {
  try {
    const ocorrencia = await prisma.ocorrencia.create({
      data: req.body
    });
    res.status(201).json(ocorrencia);
  } catch (exception) {
    res.status(400).json({ erro: exception.message });
    return;
  }
}

module.exports = { listarOcorrencias, criarOcorrencia };
