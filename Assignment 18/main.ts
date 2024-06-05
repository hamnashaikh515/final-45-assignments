//Assignment 18

let PlacetoVisit: string[] = ["SaudiArabia", "Turkey", "Italy", "Germany", "Switzerland"]

//print in original order
console.log("Original Order", PlacetoVisit);

//print array in alphabetical order without modifying the actual list
console.log("Alphabetical order", PlacetoVisit.slice().sort());

//array is still in its original order by printing it
console.log("Original Order", PlacetoVisit);

//print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order", PlacetoVisit.slice().sort().reverse());

//array is still in its original order by printing it again
console.log("Original Order", PlacetoVisit);

//reverse the order of your list. print thr array to show that its order has changed.
console.log("Reverse order changed");
PlacetoVisit.reverse();
console.log(PlacetoVisit);

//reverse the order of lidt again. print the list to show its back to its original order.
console.log("Original Order:", PlacetoVisit.sort());
console.log(PlacetoVisit);

//sort array so its stored in alphabetical order. print the array to show that its order has been changed.
console.log("Reverse alphabetical order changed", PlacetoVisit.sort().reverse());
console.log(PlacetoVisit);
