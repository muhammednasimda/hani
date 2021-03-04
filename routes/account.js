const express = require("express");
const router = express.Router();
const sequelize = require("../dbconnection");
const initModels = require("../models/init-models");
const models = initModels(sequelize);

router.post("/", async (req, res) => {
  const response = await models.accounts.create({ ...req.body });
  return res.json(response);
});

router.get("/", async (req, res) => {
  const response = await models.accounts.findAll({
    include: [
      {
        model: models.ledger,
        as: "ledger_to_ledgers",
      },
      {
        model: models.ledger,
        as: "ledgers",
      },
    ],
  });
  return res.json(response);
});

module.exports = router;
