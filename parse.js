
var parseNumbers = function(intStrs) {
  // for (var i = 0; i < intStrs.length; i++) {
  //   intStrs[i] = Math.floor(intStrs[i])
  // }

  return intStrs.map((n) => parseInt(n));
}


console.log(parseNumbers(['10'])) // should return [10]
console.log(parseNumbers(['-1','0','1'])) // should return [-1,0,1]
console.log(parseNumbers(['-12691','020','0045']))

var funct = function(n) {
  return parseInt(n)
};
(n) => parseInt(n)
