//Assignment 31
var userNames = ["Moosa", "Huda", "Admin", "Hamna", "Eesa"];
userNames = [];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for loggong in again."));
        }
        ;
    });
}
