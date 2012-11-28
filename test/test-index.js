var unit = requireUnit(module.filename)

exports['is module correctly constructed'] = function(test) {
    test.ok(unit)
    test.ok(unit.MockFunction)
    test.ok(unit.config)
    test.ok(unit.TestGroup)
    test.ok(unit.parameterize)
    test.ok(unit.requireUnit)
    test.ok(unit.includeTests)
    test.ok(unit.setSrcFolder)
    test.ok(unit.anyInt)
    test.ok(unit.anyString)
    test.ok(unit.findFolder)
    test.done()
}