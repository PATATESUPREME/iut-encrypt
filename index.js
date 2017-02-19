'use strict';

const crypto = require('crypto');

let hash = (algorithm, string) => {
    if (typeof string !== 'string')
        return false;

    let hash = crypto.createHash(algorithm);

    hash.update(string);

    return hash.digest('base64');
};

module.exports = {
    sha1: (string) => {
        return hash('sha1', string);
    }
};
