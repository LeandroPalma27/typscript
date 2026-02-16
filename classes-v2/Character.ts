(() => {

    class Character {

        /* private age: number;
        private name: string;
        private power: string; */

        constructor(public age: number, public name: string, public power: string) {
            console.log('constructor character llamado!!')
            /* this.name = name;
            this.age = age;
            this.power = power; */
        }

        protected getCharacterDetail(): string {
            return `${this.name} (${this.age}) - ${this.power}!!!!`;
        }

    }

    class Npc extends Character {
        constructor(age: number, name: string, power: string, public isAgresive: boolean) {
            super(age, name, power);
            console.log('Constructor NPC llamado!!!!');
        }

        public getNpcDetail(): string {
            return super.getCharacterDetail().concat(" NPC");
        }
    }

    const ballas = new Npc(25, "Jhon Dalas", "Gunshooter", true);
    console.log(ballas)
    console.log(ballas.getNpcDetail())

})();