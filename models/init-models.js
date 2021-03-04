var DataTypes = require("sequelize").DataTypes;
var _accounts = require("./accounts");
var _ledger = require("./ledger");

function initModels(sequelize) {
  var accounts = _accounts(sequelize, DataTypes);
  var ledger = _ledger(sequelize, DataTypes);

  ledger.belongsTo(accounts, { as: "ledger_from_account", foreignKey: "ledger_from"});
  accounts.hasMany(ledger, { as: "ledgers", foreignKey: "ledger_from"});
  ledger.belongsTo(accounts, { as: "ledger_to_account", foreignKey: "ledger_to"});
  accounts.hasMany(ledger, { as: "ledger_to_ledgers", foreignKey: "ledger_to"});

  return {
    accounts,
    ledger,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
