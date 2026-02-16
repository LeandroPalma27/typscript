(() => {
    class Avenger {
        /* private name: string;
        private team: string; */
        private realName: string;
        static avgAge: number = 35;

        constructor(private name: string, private team: string, realName?: string, avgAge: number = 35) {
            /* this.name = name;
            this.team = team; */
            this.realName = realName ?? "No tiene nombre real.";
            Avenger.avgAge = avgAge;
        }

        public bio() : string/* : () => string = (): string => */ {
            return `${this.name} (${this.team})!!!!`;
        }

        public static getAvgAge(): string {
            return this.name;
        } 
    }

    const ironman: Avenger = new Avenger("Ironman", "Capi", "Tony Stark", 45);
    console.log(ironman)
    console.log(ironman.bio())
    console.log(Avenger.avgAge)
    console.log(Avenger.getAvgAge())
})();