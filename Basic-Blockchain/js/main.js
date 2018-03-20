const Block = require('./block.js');
const Blockchain = require('./blockchain.js');
const Transaction = require('./transaction.js');

let chatterjeeCoin = new Blockchain();
chatterjeeCoin.addTransaction(new Transaction("address_1", "address_2", 100));
chatterjeeCoin.addTransaction(new Transaction("address_2", "address_3", 50));

console.log('Mining starts...');
chatterjeeCoin.minePendingTransactions('miner_address');

for(i = 1; i <= 3; i++) {
    console.log('Balance of address_' + i + ' = ' + chatterjeeCoin.checkBalance('address_' + i));
}
console.log('Balance of miner = ' + chatterjeeCoin.checkBalance('miner_address'));