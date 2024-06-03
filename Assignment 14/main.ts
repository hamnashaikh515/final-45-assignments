//Assignment 14
//for each
//Define array of guest
let guestList:string[] = ["Uroosa", "Tayyaba", "Ayesha"]

//Invite each guest for dinner

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`); 
});

//map()
//invite guest
let invitation:string[] = guestList.map(guest => `Dear ${guest}, you are cordially invited to dinner`)

console.log(invitation);

invitation.forEach(invitations => {
    console.log(invitations);
});
