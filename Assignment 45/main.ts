//Assignment 45

function create_car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model,
    }

    options.forEach(options => {
        let [key,value] = options.split(":")
        car [key.trim()] = value.trim()
    })
    return car;
}

let my_car = create_car("Toyota", "Corolla", "Color:Black", "Sunroof:true")
console.log(my_car);
