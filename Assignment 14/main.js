//Assignment 14
//for each
//Define array of guest
var guestList = ["Uroosa", "Tayyaba", "Ayesha"];
//Invite each guest for dinner
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner"));
});
//map()
//invite guest
var invitation = guestList.map(function (guest) { return "Dear ".concat(guest, ", you are cordially invited to dinner"); });
console.log(invitation);
invitation.forEach(function (invitations) {
    console.log(invitations);
});
