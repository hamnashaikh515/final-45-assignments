//Assignment 13

let TransportationMode:string[] = ["Car", "Motorcycle", "Bicycle", "Bus"];

for (let i = 0; i < TransportationMode.length; i++) {
    console.log(`I would like to own a ${TransportationMode[i]}`); 
}

TransportationMode.forEach(mode => {
    console.log(`I would like to own ${mode}`);
});