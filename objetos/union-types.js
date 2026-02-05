"use strict";
(function () {
    var customVariable = "Leandro";
    console.log(typeof customVariable);
    customVariable = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed"],
    };
    console.log(typeof customVariable);
})();
