//Assignment 12


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
  
  for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}! how are you today?` );
  }
  
  //for each
  names.forEach(friend => {
      console.log(`Hi, ${friend}! how are you today?` );
      
  });
  
  //for loop..
  for (const friendName of names) {
      console.log(`Dear, ${friendName}! how are you?` );
      
  }
      
  
      
  