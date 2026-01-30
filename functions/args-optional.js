"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, ", ").concat(lastName !== null && lastName !== void 0 ? lastName : 'Stark');
    };
    var name = fullName("Leandro");
    console.log({ name: name });
})();
