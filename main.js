"use strict";
(() => {
    class Avenger {
        constructor(name, realName, team) {
            this.name = name;
            this.realName = realName;
            this.team = team !== null && team !== void 0 ? team : 0;
        }
    }
    Avenger.avgAge = 35;
    const ironman = new Avenger("Ironman", "Tony Stark");
    console.log(ironman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map