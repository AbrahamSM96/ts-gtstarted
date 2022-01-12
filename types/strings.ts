(() => {
  const batman: string = "Batman";
  const greenLantern: string = "Green's Lantern";
  const blackVolcano: string = `Heroe: black volcano`;

  console.log(`I am ${batman}`);
  console.log(`I am ${blackVolcano}`);

  console.log(batman.toUpperCase());

  if (batman === greenLantern) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(batman[10]?.toUpperCase() ?? `No esta ${batman}`);
})();
