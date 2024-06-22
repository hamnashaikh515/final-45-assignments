//Assignment 44

function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => 
        console.log(singleItem)
        
    );
    console.log("\nNow enjoy sandwich");
    
}

makeSandwich("Ham", "Cheese");
makeSandwich("Chicken", "Mayo", "Egg")
makeSandwich("Ham", "Cheese", "Chicken", "Tomato", "Mayo", "Egg")