//Assignment 43
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Umar", "Minhaj", "Saadi"];
var copy_magicians_names = magicians_names.slice();
var copy_great_names = make_great(copy_magicians_names);
console.log("\nOriginal Array\n");
show_magicians(magicians_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_names);
