const { Router } = require("express");
const { routesFromUsuario } = require("../routes/usuario.routes");
const { routesFromUnidade } = require("./unidade.routes");
const { routesFromGeracao } = require("./geracao.routes");

// Definição da rota base da api, chamando também as rotas de cada tabela
const routes = new Router();
routes.use("/api/v1", [
  routesFromUsuario(),
  routesFromUnidade(),
  routesFromGeracao(),
]);

module.exports = routes;
