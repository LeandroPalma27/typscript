"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey JR.',
        activos: true,
        poder: 1500
    };
    const { nick, ironman } = avengers;
    console.log(nick);
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman);
        console.log(resto);
    };
    printAvenger(avengers);
})();
(() => {
    let a = 10;
    const NOMBRE = "Leandro";
    const getName = () => {
        console.log('first');
    };
})();
//# sourceMappingURL=main.js.map