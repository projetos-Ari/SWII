//function soma(a,b){
  //  return a + b;
//}
//function sub(a,b){
  //  return a - b;
//}

//function mult(a,b){
//    return a * b;  
//}
//function div(a,b){
//    return a / b;
//}

//console.log(sub(2,4));

var somafun = require("./soma");
var subfun = require("./sub");
var divfun = require("./div");
var multfun = require("./mult");

console.log(somafun(2,4));
console.log(subfun(10,5));
console.log(divfun(12,3));
console.log(multfun(20,0));