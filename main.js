"use strict";
(() => {
    class Character {
        constructor(age, name, power) {
            this.age = age;
            this.name = name;
            this.power = power;
            console.log('constructor character llamado!!');
        }
        getCharacterDetail() {
            return `${this.name} (${this.age}) - ${this.power}!!!!`;
        }
    }
    class Npc extends Character {
        constructor(age, name, power, isAgresive) {
            super(age, name, power);
            this.isAgresive = isAgresive;
            console.log('Constructor NPC llamado!!!!');
        }
        getNpcDetail() {
            return super.getCharacterDetail().concat(" NPC");
        }
    }
    const ballas = new Npc(25, "Jhon Dalas", "Gunshooter", true);
    console.log(ballas);
    console.log(ballas.getNpcDetail());
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 35) {
            this.name = name;
            this.team = team;
            this.realName = realName !== null && realName !== void 0 ? realName : "No tiene nombre real.";
            Avenger.avgAge = avgAge;
        }
        bio() {
            return `${this.name} (${this.team})!!!!`;
        }
        static getAvgAge() {
            return this.name;
        }
    }
    Avenger.avgAge = 35;
    const ironman = new Avenger("Ironman", "Capi", "Tony Stark", 45);
    console.log(ironman);
    console.log(ironman.bio());
    console.log(Avenger.avgAge);
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=main.js.map