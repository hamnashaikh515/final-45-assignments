//Assignment 19
var guestList = ["Uroosa", "Tayyaba", "Ayesha"];
//print message
console.log("Unfortunately! the dinner table wont arrive so we can invite only 2 guests");
guestList.unshift("Moosa", "Eesa");
//print mesage updated list
console.log("Updated list of guest", guestList);
//remove guest from the list
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry! ".concat(removedGuest, ", we cant invite you"));
    }
}
//print the message to each of the two people still on your list
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You both are invited for the dinner"));
});
//remove 2 names from the list
guestList.splice(0, guestList.length);
//print updated empty list
console.log("Updated list of guest:", guestList);
