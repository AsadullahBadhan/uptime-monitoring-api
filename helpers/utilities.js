/*
 *Title: Utilities
 *Descripion: All utilities
 *Author: Asadullah Badhan
 *Date: 07/22/2023
 *
 */

// Dependencies
const crypto = require('crypto');
const environment = require('./environment');

// Module scaffolding
const utilities = {};

// parse json to object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch (error) {
        output = {};
    }

    return output;
};

// hash
utilities.hash = (str) => {
    if (!typeof str === 'string' && str.length < 0) return false;

    const hash = crypto.createHmac('sha256', environment.secretKey);
    hash.update(str);
    const encryptedStr = hash.digest('hex');
    return encryptedStr;
};

module.exports = utilities;
