
const { computeStringLength, extractSubstring, countWords, countCharacters, countLines } = require('./question2-strings.js');

const testString = "Hello, My name is Sidhant Sharma.\nI am a masters student at VIT Vellore.\nCurrently i am doing full stack lab assignment.";

console.log("String Length:", computeStringLength(testString));
console.log("Substring:", extractSubstring(testString, 0, 5));
console.log("Word Count:", countWords(testString));
console.log("Character Count:", countCharacters(testString));
console.log("Line Count:", countLines(testString));
