(() => {
  const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const villanians = ["Duende verde", "Halloween", "Joker"];
  console.log(number);
  villanians.forEach((e) => console.log(e.toUpperCase()));
  villanians.forEach((element) => [...element.toUpperCase()]);

  console.log(villanians);
})();
