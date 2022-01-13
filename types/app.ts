(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones

  enum power {
    aquaman = 0,
    flash = 1,
    superman = 100,
    batman = 5,
  }
  const fuerzaFlash = power.flash;
  const fuerzaSuperman = power.superman;
  const fuerzaBatman = power.batman;
  const fuerzaAquaman = power.aquaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }
  activar_batiseñal();

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
