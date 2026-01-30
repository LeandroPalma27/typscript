"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper)
            return "".concat(firstName, " ").concat(lastName !== null && lastName !== void 0 ? lastName : "Stark").toUpperCase();
        return "".concat(firstName, " ").concat(lastName !== null && lastName !== void 0 ? lastName : "Stark");
    };
    var name = fullName("Leandro", "Palma", true);
    console.log(name);
})();
