"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let power;
    (function (power) {
        power[power["aquaman"] = 0] = "aquaman";
        power[power["flash"] = 1] = "flash";
        power[power["superman"] = 100] = "superman";
        power[power["batman"] = 5] = "batman";
    })(power || (power = {}));
    const fuerzaFlash = power.flash;
    const fuerzaSuperman = power.superman;
    const fuerzaBatman = power.batman;
    const fuerzaAquaman = power.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    activar_batiseñal();
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
