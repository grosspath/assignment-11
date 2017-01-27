/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
 var textOnly = function (longString) {
   var lettersOnly = '';
   for (var i = 0; i < longString.length; i++) {
     if (longString[i] !== "'") {
       lettersOnly = lettersOnly + longString[i];
     }
   }
   return lettersOnly;

 }


 var findLongestWord = function (wordString) {

   var longString = '';

   var maxLongString = wordString.split(' ');

   for (var i = 0; i < maxLongString.length; i++) {

     var noApost = textOnly(maxLongString[i]);

     if (longString.length < noApost.length) {

       longString = noApost;
   }
 }
return longString;
 }


console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
