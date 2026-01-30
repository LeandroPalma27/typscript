(() => {
  const fullName = (firstName: string, ...restNames: string[]): string => {
    return `${firstName} ${restNames.join(" ")}`;
  };

  console.log(fullName("Leandro", "Palma", "Alvarado", "Martin"));
})();
