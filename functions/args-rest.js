"use strict";
(function () {
    var fullName = function (firstName) {
        var restNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restNames[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restNames.join(" "));
    };
    console.log(fullName("Leandro", "Palma", "Alvarado", "Martin"));
})();
