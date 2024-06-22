//Assignment 44
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) {
        return console.log(singleItem);
    });
    console.log("\nNow enjoy sandwich");
}
makeSandwich("Ham", "Cheese");
makeSandwich("Chicken", "Mayo", "Egg");
makeSandwich("Ham", "Cheese", "Chicken", "Tomato", "Mayo", "Egg");
