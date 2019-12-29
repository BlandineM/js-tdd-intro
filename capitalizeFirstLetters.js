// capitalizeFirstLetters.js
const assert = require("assert");

function capitalizeFirstLetters(input) {
  let output = "";
  if (input.length > 0) {
    output += input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i - 1] === " ") {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    }
    return output;
  } else {
    return "";
  }
}

module.exports = capitalizeFirstLetters;

// // Check that capitalizeFirstLetters is a function
// assert.strictEqual(typeof capitalizeFirstLetters, "function");
// // Check that capitalizeFirstLetters transforms javaScript correctly
// assert.strictEqual(capitalizeFirstLetters("salut ca va"), "Salut Ca Va");
// // Check that it works for a 1-character string
// assert.strictEqual(capitalizeFirstLetters("z"), "Z");
// // Check that it works for an empty string
// assert.strictEqual(capitalizeFirstLetters(""), "");
