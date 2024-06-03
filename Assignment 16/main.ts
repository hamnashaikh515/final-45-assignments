//Assignment 16

let guestList:string[] = ["Uroosa", "Ayesha", "Hamna Shaikh"]
console.log("Great News! We found a bigger table ");

//unshift
guestList.unshift("Attiqa");

guestList.splice(Math.floor(guestList.length/2),0, "Tayyaba");

//push
guestList.push("Moosa")

console.log(guestList);

//foreach
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
    
});