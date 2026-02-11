class Avenger {
    name;
    power;

    constructor(name = "No name", power = 0) {
        this.name = name;
        this.power = power;
    }
}

class FlyingAvenger extends Avenger{
    flying;
    constructor(name, power, flying = false) {
        super(name, power);
        this.flying = flying;
    }
}

const hulk = new Avenger("Bruce Banner", 20);
const falcon = new FlyingAvenger("Falcon", 20, true);
console.log(hulk);
console.log(falcon);