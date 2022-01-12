(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Dr Strange";
  console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(3));

  avenger = 120.34;
  console.log(<number>avenger.toFixed());

  console.log(exists);
  console.log(power);
})();
