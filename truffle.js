/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

var mnemonic = "wild column boat sting review caught vocal spice option switch raccoon swap";
var infura = "https://rinkeby.infura.io/v3/9e9386f54cdf430f885c6ededa4e4475";
var HDWalletProvider = require("truffle-hdwallet-provider");

 module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, infura),
      network_id: "4",
      gas: 4500000
    }
  }
};

