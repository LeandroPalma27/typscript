"use strict";
(function () {
    function callBatman() {
        return 'xd';
    }
    var updateUser = function () {
        return { name: 'Leandro' };
    };
    var response = callBatman();
    var response2 = updateUser();
    console.log(response);
    console.log(response2.name);
})();
