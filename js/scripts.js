var numerals = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, VL:45, XL:40, X:10, IX:9, V:5, IV:4, I:1}
var output = [];
var outputFinal = [];

function numeralMaker(input) {

  var numberArray= input.split("");
  var firstNumberX = numberArray.slice(0,1);
  var firstNumber = parseInt(firstNumberX);

  if (isNaN(input)) {
    alert("Please type a number")
  } else if (input.length > 4) {
    alert("Please enter number less than 4,000.")
  } else if ((input.length === 4) && (firstNumber > 3)) {
    alert("Please enter number less than 4,000.")
  } else {
    for (var i in numerals) {
      while (input >= numerals[i]) {
        output.push(i);
        input -= numerals[i]
      }
      var outputSecond = output.join("");
    }
    outputFinal.push(outputSecond);

  }

}

$(document).ready(function() {
  $("form#numerator").submit(function(event){
    event.preventDefault();
    var input = $("input#input").val();
    numeralMaker(input);
    $(".output").text(outputFinal);
  });

});


//this is our first attempt//

  // var I = 1;
  // var V = 5;
  // var X = 10;
  // var L = 50;
  // var C = 100;
  // var D = 500;
  // var M = 1000;

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
