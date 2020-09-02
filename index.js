// Write your code here

class Breakfast {
    constructor(food,drink) {
        this.food = food;
        this.drink = drink;
    }
};

let am = new Breakfast("eggs","coffee")
am;

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let lunch = new Lunch('side salad')
lunch;

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = dessert
    }
}

let dinner = new Dinner('_cheesecake')
dinner;