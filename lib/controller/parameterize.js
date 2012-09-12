module.exports = function(data, func, name) {
    if(!name)
        name = "test";
    name += " ";
    var suite = {};
    data.forEach(function(value, index) {
        suite[name + index] = function(test) {
            value.unshift(test);
            func.apply(null, value);
        }
    });
    return suite;
}