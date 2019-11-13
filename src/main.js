import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { NumeralMaker } from "./romanNumerals.js";


$(document).ready(function() {
  $("form#numerator").submit(function(event){
    event.preventDefault();
    var input = $("input#input").val();
    console.log(input);
    var numberArray = input.split("");
    console.log(numberArray);
    var firstNumberX = numberArray.slice(0,1);
    console.log(firstNumberX);
    var firstNumber = parseInt(firstNumberX);
    console.log(firstNumber);
    var numeralMaker = new NumeralMaker(input, numberArray, firstNumberX, firstNumber);
    numeralMaker.translate(input);
    $(".output").text(numeralMaker.outputFinal);
    console.log(numeralMaker.outputFinal) ;
  });

});
