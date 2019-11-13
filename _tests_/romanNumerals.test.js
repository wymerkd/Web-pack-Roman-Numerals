import { NumeralMaker } from "./../src/romanNumerals.js";

describe('NumeralMaker', () => {

  test('should correctly determine whether the input is a number', () => {
    var numbers = new NumeralMaker("a", "s", "c");
    expect(numbers.translate()).toEqual("enter a number");
  })
})
