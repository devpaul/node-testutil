var unit = requireUnit(module.filename);
var path = require('path');

var DEFAULTFS = path.resolve('./test-assets/includeTestDefaultBehavior');

exports['is correctly constructed'] = function(test) {
    test.ok(unit);
    test.done();
}

exports['requireUnit requires mappedUnit'] = function(test) {
    var mod = unit(DEFAULTFS + '/test/test-mocktest.js');
    test.ok(mod);
    test.equals("mocktest", mod.name);
    test.done();
}

exports['requireUnit filename provided - uses filename'] = function(test) {
    var mod = unit(DEFAULTFS + '/test/config/test-mockconfig.json.js', 'mockconfig.json');
    test.ok(mod);
    test.equals("mockconfig", mod.name);
    test.done();
}