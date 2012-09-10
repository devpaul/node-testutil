function MockExpressServer() {
    if(!(this instanceof MockExpressServer))
        return new MockExpressServer();

    var that = this;
    this.posts = [];
    this.gets = [];
    this.post = function(endpoint, handler) {
        that.posts.push(new RESTMapping(endpoint, handler));
    };
    this.get = function(endpoint, handler) {
        that.gets.push(new RESTMapping(endpoint, handler))
    };
}

function RESTMapping(endpoint, handler) {
    if(!(this instanceof RESTMapping))
        return new RESTMapping(endpoint, handler);

    this.endpoint = endpoint;
    this.handler = handler;
}

module.exports = MockExpressServer;