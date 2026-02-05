"use strict";
(function () {
    var _a;
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed"],
    };
    var superman = {
        name: "Clark Kent",
        age: 32,
        powers: ["Strenght"],
    };
    /* flash = {
      name: "Batman",
      powers: [],
      getName() {
        return this.name;
      },
    }; */
    console.log(flash);
    console.log(superman);
    console.log(((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash)) || "No hay funcion");
})();
