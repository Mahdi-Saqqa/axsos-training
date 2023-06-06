class ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(this.name);
        console.log(this.speed);
        console.log(this.strength);
        console.log(this.health);
    }

    drinkSake() {
        this.health += 10;
    }
}

let mahdi = new ninja('mahdi', 40);
mahdi.drinkSake();
mahdi.showStats();