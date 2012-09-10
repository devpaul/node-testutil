module.exports = function(module) {
    module.parameterize = parameterize;
}

function parameterize(data, func, name) {
    if(!name)
        name = "test";
    name += " ";
    var suite = {};
    data.forEach(function(value, index, list) {
        suite[name + index] = function(test) {
            value.unshift(test);
            func.apply(null, value);
        }
    });
    return suite;
}