//Assignment 13
var TransportationMode = ["Car", "Motorcycle", "Bicycle", "Bus"];
for (var i = 0; i < TransportationMode.length; i++) {
    console.log("I would like to own a ".concat(TransportationMode[i]));
}
TransportationMode.forEach(function (mode) {
    console.log("I would like to own ".concat(mode));
});
