//Assignment 12
//Array
//define an array of Names..
var names = [
    "Hamna",
    "Uroosa",
    "Tayyaba",
    "Ayesha",
    "Attiqa",
    "Anmol",
    "Nayab",
    "Aabgina",
];
//loop
//for each
//for loop
for (var i = 0; i < names.length; i++) {
    console.log("Hello, ".concat(names[i], "! how are you today?"));
}
//for each
names.forEach(function (friend) {
    console.log("Hi, ".concat(friend, "! how are you today?"));
});
//for loop..
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log("Dear, ".concat(friendName, "! how are you?"));
}
