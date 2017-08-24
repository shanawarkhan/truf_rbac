var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var DSAuth = artifacts.require("./DSAuth.sol");
var DSRoles = artifacts.require("./DSRoles.sol");
var SimpleRoleAuth = artifacts.require("./SimpleRoleAuth.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(DSAuth);
  deployer.deploy(DSRoles);
  deployer.deploy(SimpleRoleAuth);
};
