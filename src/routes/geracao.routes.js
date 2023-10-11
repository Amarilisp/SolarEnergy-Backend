const { geracaoCadastro } = require("../controllers/geracao.controller");

const { Router } = require("express");

class GeracaoRouter {
  routesFromGeracao() {
    const geracaoRoutes = Router();
    geracaoRoutes.post("/geracao", geracaoCadastro);

    return geracaoRoutes;
  }
}

module.exports = new GeracaoRouter();
