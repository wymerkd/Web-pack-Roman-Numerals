var numerals = {M:1000, CM:900, D:500, LD:450, CD:400, C:100, XC:90, L:50, VL:45, XL:40, X:10, IX:9, V:5, I:1}

var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

var input = "3124"

var output = [];

console.log(output);

function numeralMaker(input) {
  for (var i in numerals) {
    while (input >= numerals[i]) {
      output.push(i);
      input -= numerals[i]
    }
  }
  console.log(output);







  // var numberArray= input.split("");
  // console.log(numberArray);
  //
  //
  // var firstNumberX = numberArray.slice(0,1);
  // var secondNumberX = numberArray.slice(1,2);
  // console.log(firstNumberX);
  //
  // var thirdNumberX = numberArray.slice(2,3);
  // var fourthNumberX = numberArray.slice(3,4);
  // console.log(fourthNumberX);
  //
  // var firstNumber = parseInt(firstNumberX);
  // var secondNumber = parseInt(secondNumberX);
  // console.log(secondNumber);
  // var thirdNumber = parseInt(thirdNumberX);
  // var fourthNumber = parseInt(fourthNumberX);
  // console.log(thirdNumber);
  //
  //   if (numberArray.length > 4) {
  //     console.log("TOO BIG");
  //   } else if ((numberArray.length === 4) && (firstNumber > 3)) {
  //     console.log("Too Big");
  //   } else if ((numberArray.length === 4) && (firstNumber === 3)){
  //     output.push("MMM");
  //   } else if ((numberArray.length === 4) && (firstNumer === 2)) {
  //     output.push("MM")
  //   } else if ((numberArray.length === 4) && (firstNumer === 1)) {
  //     output.push("M")
  //   } else if (numberArray.length === 3) {
  //       if (firstNumber === 500) {
  //         ouput.push("D")
  //       } else if (firstNumber > 500) {
  //
  //       }
  //   } else if (numberArray.length === 2) {
  //
  //   }else if (numberArray.length ===1) {
  //
  //   } else
  //
  //
  //
  // numberArray.forEach(function(number) {
  // })

}

$(document).ready(function() {

  numeralMaker(input);
})
