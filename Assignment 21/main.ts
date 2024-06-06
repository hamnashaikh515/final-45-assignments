// //Assignment 21

// //default type object 
// //update property
// //add new property

// //use any with object

// //They think to something you could store in a Typescript object. Write a program that creates object containing these items.
// let student = {
//     name: "Moosa",
//     rollnumber: 45673,
//     grades: [79, 89, 80]
// };

// console.log(student.grades[1]);

// let products = {
//     name: "Laptop",
//     price: 50000,
//     Description: "high performence with fast processor"
// }
// console.log(products.price);


// //type interface
// interface person {
//     name: string;
//     age: number;
//     // city: string;
// }

// let person1: person = {
//     name: "Moosa",
//     age: 20,
//     // city: "Karachi"
// }

// let person2: person = {
//     name: "Eesa",
//     age: 19,
//     // city: "Karachi"
// }
// // //type annotation
// // let myVariable: string = "hello";

// // //type infers
// // let anotherVariable: string = "world"

// //initial abject
// let person = {
//     name: "Moosa",
//     age: 20,
//     city: "Karachi"
// }

// //update property

// person.age = 21;
// person.city = "Lahore"

// console.log(person);

// //add new property
// person["gender"] = "male";

// console.log(person);

// //define custom type property


// //use any with object
// let myVariable: any;
// myVariable= 10;
// myVariable= "hello";
// myVariable= true;

//Assignment 21

let objectContainingItems: {[key: string]: any} = {
    "laptop": {
        name: "Laptop",
        price: 50000,
        Description: "high performence with fast processor"
    },
    "mouse": {
        name: "Mouse",
        price: 1000,
        Description: "high performence with fast processor"
    },
    "keyboard": {
        name: "Keyboard",
        price: 2000,
        Description: "high performence with fast processor"
    }
}
console.log(objectContainingItems);
