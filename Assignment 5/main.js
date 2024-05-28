"use strict";
//Assignment 5
//Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
let personName = `\n\t Hamna Shaikh \t\n`;
//Print the name once, so the whitespace around the name is displayed. 
console.log(personName);
//print the name after striping the white spaces.
let stripped = personName.trim();
console.log(stripped);
