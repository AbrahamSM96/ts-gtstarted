(() => {
  //never funcion que siempre terminara con un error
  const error = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };
  error("Auxilio");
  console.log("HJoasd ");
})();
