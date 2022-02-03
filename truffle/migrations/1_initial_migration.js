const smartContract = artifacts.require('dtech');

module.exports = function (deployer) {
  deployer.deploy(smartContract);
};
