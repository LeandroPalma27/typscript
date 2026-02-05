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
        getName: function () {
            return "HOLA";
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
