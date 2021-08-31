'use strict';
const mongoose = require('mongoose');

class Crypto {
    constructor(item) {
        this.image_url = item.image_url,
        this.toUSD = item.toUSD,
        this.description = item.description
    }
}


const CryptoSchema = new mongoose.Schema({
    email: String,
    image_url: String,
    toUSD: String,
    description: String
});


const myCrypto = mongoose.model('crypto', CryptoSchema);

module.exports = { Crypto, myCrypto }