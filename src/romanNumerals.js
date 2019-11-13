export function NumeralMaker(input, numberArray, firstNumberX, firstNumber) {

  this.numerals = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, VL:45, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  this.output = [];
  this.outputFinal = [];
  this.input = input;
  this.numberArray = numberArray;
  this.firstNumberX = firstNumberX;
  this.firstNumber = firstNumber;

}

NumeralMaker.prototype.translate = function(input) {
  if (isNaN(input)) {
    alert("Please type a number");
  } else if (this.input.length > 4) {
    alert("Please enter number less than 4,000.");
  } else if ((this.input.length === 4) && (this.firstNumber > 3)) {
    alert("Please enter number less than 4,000.");
  } else {
    for (var i in this.numerals) {
      while (input >= this.numerals[i]) {
        this.output.push(i);
        console.log(this.output);
        input -= this.numerals[i];
      }
      var outputSecond = this.output.join("");
      console.log(outputSecond);
    }
    this.outputFinal.push(outputSecond);
    console.log(this.outputFinal);

  }
}
