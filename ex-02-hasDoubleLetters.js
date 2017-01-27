
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/
// INPUT a String

var hasDoubleLetters = function (someString) {
  var isTrue = false;
  for (var i = 0; i < (someString.length-1); i++) {
    if (someString[i].toLowerCase() === someString[i+1].toLowerCase()){
      isTrue = true;
    }
  }
  return isTrue;
}

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
