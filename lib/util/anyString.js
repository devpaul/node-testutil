var anyInt = require('./anyInt.js');
var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
var minGeneratedLength = 8;

function randomString(length) {
    if(!length)
        length = anyInt(chars.length - minGeneratedLength, minGeneratedLength);

    var str = '';
    for(var i = 0; i < length; i++)
        str += chars[anyInt(chars.length)];
    return str;
}

module.exports = randomString;