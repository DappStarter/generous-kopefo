require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember hospital idea clinic orange general'; 
let testAccounts = [
"0xe735ea44c5d2b14a774d668753b1d9e9d43c20928749618ebbe8a1cf7185c2d6",
"0x342bc5ca531c9488d5e69bf9a08214ae342f1116836a4dd8bb836509d55f777c",
"0x06b25ab9d318e5606866fd1f892f340c1d30bb774f37fd3f7004bfe38b64fd9b",
"0x235b37b989441d0a147a9a9c5ac4762aeca2d4cd004a90349a7f861fead84929",
"0x1eb37317f08f230efc3c464e1405487629224a0bf3cf723363ee440e71d425bf",
"0x4a40a521c10c2a660524c48644447d81ed90af347c45d762e6b7debf4e8f87be",
"0x6980347439174f8860054bcde203f86f329b97151340b332e92753602a0b338c",
"0x3ff446344e76fd671c3e5cdf9e7fe0d9af86b3da263dabb161be187f80dc6626",
"0x8476db6c30cfe54f097d89280cf71de5a8ae6003fbeb129cee199f16f20619f7",
"0x825e592d5d3531cb86b29c8e468f31fe84677c3473d122c0e09ef491d679ec8f"
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
            version: '^0.5.11'
        }
    }
};
