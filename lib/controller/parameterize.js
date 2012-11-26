function parameterize(data, func, name) {
    var suite = {}

    name = (name || "test") + " "
    data.forEach(function(value, index) {
        suite[name + index] = function(test) {
            var args = value.slice(0)
            args.unshift(test)
            func.apply(null, args)
        }
    })
    return suite
}

module.exports = parameterize