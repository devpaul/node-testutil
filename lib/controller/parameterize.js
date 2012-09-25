module.exports = function(data, func, name) {
    if(!name)
        name = "test";
    name += " ";
    var suite = {};
    data.forEach(function(value, index) {
        suite[name + index] = function(test) {
            var args = value.slice(0);
            args.unshift(test);
            func.apply(null, args);
        }
    });
    return suite;
}