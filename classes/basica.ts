(() => {
    class Avenger {
        private name: string;
        public realName: string;
        private team?: number;
        static avgAge: number = 35;

        constructor (name: string, realName: string, team?: number) {
            this.name = name;
            this.realName = realName;
            this.team = team ?? 0;
        }
    }

    const ironman: Avenger = new Avenger("Ironman", "Tony Stark");
    console.log(ironman);
    console.log(Avenger.avgAge);
    
})();