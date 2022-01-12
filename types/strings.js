"use strict";
(() => {
    var _a, _b;
    const batman = "Batman";
    const greenLantern = "Green's Lantern";
    const blackVolcano = `Heroe: black volcano`;
    console.log(`I am ${batman}`);
    console.log(`I am ${blackVolcano}`);
    console.log(batman.toUpperCase());
    if (batman === greenLantern) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    console.log((_b = (_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : `No esta ${batman}`);
})();
