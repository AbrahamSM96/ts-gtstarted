(() => {
  const hero: string = "Flash";
  function returnName(): string {
    return hero;
  }
  function activateBatiSignal(): string {
    return "Batiseñal activada!";
  }

  console.log(typeof activateBatiSignal());

  const heroName = returnName();
})();
