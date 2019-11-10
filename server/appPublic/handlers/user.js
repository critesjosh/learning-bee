'use strict';
var ethers = require('ethers');
let token = require("../../../build/contracts/Token.json")

let provider = ethers.getDefaultProvider('ropsten');
let wallet = new ethers.Wallet("da18464c8211a087da281da3aa3010364ef0421bc52f6a3fefc42fc103e7ca6c", provider)

let abi = token.abi
let contractAddress = token.networks["3"].address

let tokenContract = new ethers.Contract(contractAddress, abi, wallet)

function mintTokens(to, amount){
    return new Promise((resolve, reject) => {
        tokenContract.mint(to, amount).then(resolve).catch(reject)
    })
}

let mintToAddress = "0x2ED8D02DE367F671Ec77bcDa23F59DdFb6b81147"  // <-- this should be the address received from the client
let amountToMint = 42



class Something {

    constructor(helpers, models, errors) {
		
        this.helpers = helpers;
        this.models = models;
        this.errors = errors;

    };

    pay(address, amount) {
        return new Promise((resolve, reject) => {
            mintTokens(address, amount).then(response => {
                console.log(response)
                resolve({
                    code: 200,
                    message: "Payment successful"
                });
            })
        });
    };
};

module.exports = Something;