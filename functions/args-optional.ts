(() => {
  const fullname = (firstName: string, lastname?: string): string => {
    return `${firstName} ${lastname || "-----"}`;
  };

  const name = fullname("tony");

  console.log({ name });
})();
