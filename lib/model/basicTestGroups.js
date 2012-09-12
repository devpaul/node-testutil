var TestGroup = require('./TestGroup.js');

var srcFolder = "src";
var testFolderReplace = /(test)(?=\/|$)/;

exports.testGroup = createTestGroup();
exports.integrationGroup = createIntegrationGroup();


function createTestGroup() {
    return new TestGroup("test"
                         , /(^test-)/
                         , testFolderReplace
                         , srcFolder);
}

function createIntegrationGroup() {
    return new TestGroup("integration"
                         , /(^integration-)/
                         , testFolderReplace
                         , srcFolder);
}