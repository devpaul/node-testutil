var unit = requireUnit(module.filename);

exports['is correctly constructed'] = function(test) {
    test.ok(unit);
    test.equals(unit.verbose, false);
    test.ok(unit.testGroup);
    test.done();
}