class Car {
    constructor (brand, name, price, weight, fuel_type, color, img){
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.img = img;
    }
    render (element, thing){
        let elem = document.querySelector(element);
        elem.innerHTML = thing; 
    }

}