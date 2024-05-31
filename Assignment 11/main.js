//Assignment 11
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
    console.log(names[i]);
}
//for each
names.forEach(function (name) {
    console.log(name);
});
//for loop..
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
