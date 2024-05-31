//Assignment 11
//Array

//define an array of Names..
let names: string[] = [
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

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//for each
names.forEach(name => {
    console.log(name);
    
});

//for loop..
for (const friendName of names) {
    console.log(friendName);
    
}
    

    
