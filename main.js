"use strict";
// Array of magician's names.
const magicianNames = ["Harry Porter", "David Copperfield", "Professor Albus Dumbledore", "Ron Weasley"];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatmagicians = magicians.map(magician => `the Great ${magician}`);
    return greatmagicians;
}
// Modify the Array to add "the Great" to each magician's names.
const greatMagicianNames = make_great(magicianNames);
// Call the function to show the original magician's names
console.log("Original Magicians:");
showMagicians(magicianNames);
//Call the function to show the original magician's names
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
