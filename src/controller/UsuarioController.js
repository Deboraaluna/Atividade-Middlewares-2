const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarUsuarios = async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
}

const buscarUsuario = async (req, res) => {
  const usuario = await prisma.usuario.findUnique({
    where: { email: req.params.email }
  });

  if (usuario === null) {
    res.status(404).json({ erro: "Usuário não encontrado" });
    return;
  }

  res.json(usuario);
}

const criarUsuario = async (req, res) => {
  try {
    const usuario = await prisma.usuario.create({
      data: req.body
    });
    res.status(201).json(usuario);
  } catch (exception) {
    res.status(400).json({ erro: exception.message });
    return;
  }
}

const deletarUsuario = async (req, res) => {
  const usuario = await prisma.usuario.findUnique({
    where: { email: req.params.email }
  });

  if (usuario == null) {
    res.status(404).json({ erro: "Usuário não encontrado" });
    return;
  }

  await prisma.usuario.delete({
    where: { email: req.params.email }
  });
  res.json(usuario);
}

const atualizarUsuario = async (req, res) => {
  const usuario = await prisma.usuario.findUnique({
    where: { email: req.params.email }
  });

  if (usuario == null) {
    res.status(404).json({ erro: "Usuário não encontrado" });
    return;
  }

  const updatedUsuario = await prisma.usuario.update({
    where: { email: req.params.email },
    data: req.body
  });

  res.json(updatedUsuario);
}

module.exports = { listarUsuarios, buscarUsuario, criarUsuario, deletarUsuario, atualizarUsuario };
