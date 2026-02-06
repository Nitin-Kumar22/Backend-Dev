// Exercise 2: Custom Module
// Build a module called stringUtils.js that exports functions for capitalizing strings, reversing
// strings, and counting vowels.


import fs from "fs";

function upperCase(str) {
    return str.toUpperCase();         // example function to capitalize the string
}
function reverseStr(str) {
    return str.split("").reverse().join("");         // example function to reverse the string
}
function vowelsCount(str){
    let vowels=str.match(/[aeiouAEIOU]/g);    //example function to count the no. of vowels in the string
    return vowels.length;    //returning the count of vowels.

}
export {upperCase, reverseStr, vowelsCount};    //exporting the functions to be used in other files.