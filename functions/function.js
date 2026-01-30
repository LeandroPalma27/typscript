"use strict";
(function () {
    var hero = 'SpiderMan';
    function returnName() {
        return hero;
    }
    var activarMensaje = function () {
        return 'hola';
    };
    console.log(typeof activarMensaje);
    var mensaje = activarMensaje();
})();
