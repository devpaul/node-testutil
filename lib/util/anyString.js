var anyInt = require('./anyInt.js')
  , chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('')
  , minGeneratedLength = 8

function randomString(length) {
    length = length || anyInt(chars.length - minGeneratedLength, minGeneratedLength)

    var str = ''
    for(var i = 0; i < length; i++)
        str += chars[anyInt(chars.length)]
    return str
}

module.exports = randomString