() => {
  const fullname = (firstName: string, lastname: string | boolean): string => {
    return `${firstName} ${lastname}`;
  };

  const name = fullname("tony", true);

  console.log({ name });
};
