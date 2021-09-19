const Hamburgers = {
    S: {
        price: 50,
        kcal: 20
    },
    M: {
        price: 75,
        kcal: 30
    },
    L: {
        price: 100,
        kcal: 40
    }
};

const Toppings = {
    Cheese: {
        price: 10,
        kcal: 20
    },
    Salat: {
        price: 20,
        kcal: 5
    },
    Potato: {
        price: 15,
        kcal: 10
    },
    Spices: {
        price: 15,
        kcal: 0
    },
    Mayo: {
        price: 20,
        kcal: 5
    }
};

class Hamburger {
    constructor(size) {
        this.price = size.price;
        this.kcal = size.kcal;
    }

    addTopping(topping) {
        this.price = this.price + topping.price;
        this.kcal = this.kcal + topping.kcal;
    }

    getPrice() {
        return this.price;
    }

    getCallories() {
        return this.kcal;
    }
}

const orderHamburger = new Hamburger(Hamburgers.L);

orderHamburger.addTopping(Toppings.Mayo);
orderHamburger.addTopping(Toppings.Potato);
orderHamburger.addTopping(Toppings.Cheese);

console.log("Price: ", orderHamburger.getPrice());
console.log("Kcal: ", orderHamburger.getCallories());
