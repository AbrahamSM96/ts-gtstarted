"use strict";
(() => {
    //never funcion que siempre terminara con un error
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio");
    console.log("HJoasd ");
})();
