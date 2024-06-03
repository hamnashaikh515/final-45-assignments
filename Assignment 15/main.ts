//Assignment 15

let guestList:string[] = ["Uroosa", "Tayyaba", "Ayesha"]

//Print the name who cant make dinner
let unableAttend:string | undefined = guestList.splice(1,1)[0];

console.log(`${unableAttend} not invited for dinner`);

//push
guestList.push("Hamna Shaikh")

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited`);
});
