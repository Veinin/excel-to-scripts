var exporters = require("./libs/exporters")

var srcePath = "./data/常量工作表示例.xlsx";
var destPath = "./output"

exporters.exportSheets(exporters.EXPORT_TYPE.JSON, srcePath, destPath)

// var pattern = /^\[(.+)\]$/;

// var result = pattern.exec("[[int]]")
// console.log(result[0], result[1])

// var result = pattern.exec("[int]")
// console.log(result[0], result[1])

// var result = pattern.exec("[string]")
// console.log(result[0], result[1])

// var result = pattern.exec("[float]")
// console.log(result[0], result[1])

// var result = pattern.exec("[{id=int,num=int}]")
// console.log(result[0], result[1])



// var pattern = /^\{(.+)\}$/;
// var result = pattern.exec("{id=int,num=int}");
// console.log(result[0], result[1])

// var result = pattern.exec("{id=int,nums=[int]}");
// console.log(result[0], result[1])

// var result = pattern.exec("{id=int,nums=[[int]]}");
// console.log(result[0], result[1])

// var t = types.parseType("{id=int,num=int}")
// console.log(t)

// var t = types.parseType("{id=int,nums=[[int]]}")
// console.log(t) 