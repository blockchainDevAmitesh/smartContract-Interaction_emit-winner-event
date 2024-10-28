const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CallerModule", (m) => {
  const caller = m.contract("Caller");
  return {caller};
});