module.exports = MockFunction

function MockFunction(returnData) {
    var argList = []
      , data = returnData
      , func = function() {
                   argList.push(arguments)
                   return data
               }

    func.argList = argList
    func.setReturnData = function(returnData) {
        data = returnData
    }
    func.getReturnData = function() {
        return data
    }

    return func
}