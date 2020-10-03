const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  var newArr =[];

  for (var i = 0; i < arr.length; i++) {
    if (/^--(discard|double)-(next|prev)$/.test(arr[i])) continue;
    newArr.push(arr[i]);
    if (arr[i - 1] === "--discard-next") {
      newArr.pop();
      continue;
    }
    if (arr[i - 1] === "--double-next") newArr.push(arr[i]); 
    if (arr[i + 1] === "--discard-prev") {
      newArr.pop();
      continue;
    }
       
    if (arr[i + 1] === "--double-prev") newArr.push(arr[i]);
  }
  return newArr;

};
