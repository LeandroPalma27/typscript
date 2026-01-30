(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName}, ${lastName ?? 'Stark'}`;
  };

  const name = fullName("Leandro");

  console.log({ name });
})();
