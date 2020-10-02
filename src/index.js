const checkArray = (arr) => arr && arr.length >= 1

exports.min = (array) => checkArray(array) ? Math.min(...array) : 0

exports.max = (array) => checkArray(array) ? Math.max(...array) : 0

exports.avg = (array) => checkArray(array) ? array.reduce((a, b) => a + b, 0) / array.length : 0
