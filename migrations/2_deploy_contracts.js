var TokenGeyser = artifacts.require("TokenGeyser");

module.exports = function(developer, network, accounts) {
  console.log(network);
  console.log(accounts);
  const STAKING_ASSET_ADDRESS = '0xfc57aa6e9e659b969920de85613035fc10618fe8';
  const DISTRIBUTE_ASSET_ADDRESS = '0x009e51c01079b37ffa252ba50bca384749e6edbe';
  developer.deploy(TokenGeyser, STAKING_ASSET_ADDRESS, DISTRIBUTE_ASSET_ADDRESS, 3, 25, 7776000, 1000000);
  //developer.deploy(orchestContract, '0x7096cDe2E58023Dc8CCCaa9f27948D69F54D30Ce');
};
