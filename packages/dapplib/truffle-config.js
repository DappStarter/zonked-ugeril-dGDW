require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift rival outside purity harvest ghost army general'; 
let testAccounts = [
"0x066a6b0b2c72c3bd64ea693c9e9eb777a331d2543c5265f12a7039e19d29eb9b",
"0x8df05d250cdc1ca1f452a7e9a88e637a49a4b7487e62d52b7fc13ad5a6ab5a04",
"0x6b02adbf4282b29957284bd7bf8064ba86ec29c09567b80e58583c95c2b77308",
"0x4df98db5da6f9aad1bad651a02688a18961a30bb855d0f089b4bde887a5c9315",
"0x4d3ef04e5eba1f835618e830e3a295ea59f5a8ad80389a27a179086db0a56ea2",
"0xe2b144b41d2af6166f60ee8630f7f9144543edbc2a7a8789191f8c98e5901013",
"0xd60c9e989659b5f21258019423e7b98259f1d77a3e6067972181ccd62226bd45",
"0xc3b38386ea88d199e83d3f920d5b92f39d7275073bad3ea69e8f0824133101c2",
"0xb7a36e5163e7d28c7bd658d60f5c37aa1f58f0b9a8cd67399697533f65bb5a92",
"0x11a5bff24c97988cfd1d8214235fd4638aa46a6a7f00e39bef3fbb63f7667451"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

