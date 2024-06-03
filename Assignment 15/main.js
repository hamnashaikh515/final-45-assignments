//Assignment 15
var guestList = ["Uroosa", "Tayyaba", "Ayesha"];
//Print the name who cant make dinner
var unableAttend = guestList.splice(1, 1)[0];
console.log("".concat(unableAttend, " not invited for dinner"));
//push
guestList.push("Hamna Shaikh");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited"));
});
