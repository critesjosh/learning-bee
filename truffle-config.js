const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");

const keys = [
  "da18464c8211a087da281da3aa3010364ef0421bc52f6a3fefc42fc103e7ca6c",
  "c880cc298c3799eb70492229bce8dbcbba6d0492b50777fdc0ff8df4ac33aa32",
  "5773df6856d65e9812ef1fbf440c6a26a7a84b3de865355c5066703acb80a180",
  "03ea7f082467de133bf36e2893f7376d8e169aa38b6a5e97067160700d91ef15"
]

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(keys, "https://ropsten.infura.io/v3/91d12e33ffac42f096dc6ca9597415a3");
      },
      network_id: '3',
    },
  }
};
