const { connection } = require("../database/connection");
const { STRING, DATE, INTEGER, BOOLEAN } = require("sequelize");
const Unidade = connection.define(
  "unidades",
  {
    nickname: {
      type: STRING,
      allowNull: false,
    },
    address: {
      type: STRING,
      allowNull: false,
    },
    brand: {
      type: STRING,
      allowNull: false,
    },
    model: {
      type: STRING,
      allowNull: false,
    },
    active: {
      type: BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "Unidades",
  }
);

const Geracao = connection.define(
  "geracao",
  {
    reference_date: {
      type: DATE,
      allowNull: false,
    },
    total_generated: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Geracao",
  }
);

// Define a relação de chave estrangeira com a tabela Unidade
Geracao.belongsTo(Unidade, {
  foreignKey: "UnidadeId",
  allowNull: false,
});

module.exports = { Geracao };
