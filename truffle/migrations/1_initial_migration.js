const pots = artifacts.require('pots');

module.exports = function (deployer) {
  deployer.deploy(pots);
};
