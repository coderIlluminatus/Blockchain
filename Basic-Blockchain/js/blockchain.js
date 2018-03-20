const Block = require('./block.js');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2018", "Genesis Block", "0"); 
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for(let index = 1; index < this.chain.length; index++) {
            const currentBlock = this.chain[index];
            const previousBlock = this.chain[index-1];

            if(currentBlock.hash !== currentBlock.calculateHash())
                return false;
            
            if(currentBlock.previousHash !== previousBlock.hash)
                return false;
        }
        return true;
    }
}

module.exports = Blockchain;