//Assignment 43

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
    );
}

function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}

let magicians_names = ["Umar", "Minhaj", "Saadi"]

let copy_magicians_names = magicians_names.slice()

let copy_great_names = make_great(copy_magicians_names)

console.log("\nOriginal Array\n");
show_magicians(magicians_names)
console.log("\nCopied Array\n");
show_magicians(copy_great_names)

