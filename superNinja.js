class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(
            `health:${this.health},speed:${this.speed},strength:${this.strength}`
        );
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("eat not the yellow snow");
    }
}

const sensei = new Sensei("obi one kenobi");

sensei.showStats();
sensei.sayName();
sensei.speakWisdom();
sensei.showStats();
