function salvar(req, res) {
  res.send("Usuário > salvar");
}

function obter(req, res) {
  res.send("Usuário > obter");
}

module.exports = { salvar, obter };

// module.exports = { salvar: salvar, obter: obter };  quando os nomes são iguais pode omitir
