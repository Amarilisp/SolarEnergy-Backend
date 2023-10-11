const { Geracao } = require("../models/geracao");

class GeracaoController {
  async geracaoCadastro(req, res) {
    try {
      const { id, nickname, address, brand, model, active } = req.body;
      const data = await Geracao.create({
        id,
        nickname,
        address,
        brand,
        model,
        active,
      });
      return res.status(201).send(data);
    } catch (err) {
      return res.status(400).send({
        message: "Não foi possível criar o cadastro de uma nova Geração ",
        cause: err.message,
      });
    }
  }
}

module.exports = new GeracaoController();
