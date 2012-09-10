function MockExpressResponse() {
    if(!(this instanceof MockExpressResponse))
        return new MockExpressResponse();

    var that = this;
    this.sends = [];
    this.send = function() {
        for(var i = 0; i < arguments.length; i++)
            that.sends.push(arguments[i]);
    }
}

module.exports = MockExpressResponse;