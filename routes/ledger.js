const express = require("express");
const router = express.Router();
const sequelize = require("../dbconnection");
const initModels = require("../models/init-models");
const models = initModels(sequelize);

router.get("/", async (req, res) => {
  const response = await models.ledger.findAll();
  return res.json(response);
});

router.post("/", async (req, res) => {
  const response = await models.ledger.create({ ...req.body });
  return res.json(response);
});

module.exports = router;
