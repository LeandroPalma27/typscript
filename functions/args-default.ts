(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false,
  ): string => {
    if (upper) return `${firstName} ${lastName ?? "Stark"}`.toUpperCase();
    return `${firstName} ${lastName ?? "Stark"}`;
  };

  const name = fullName("Leandro", "Palma", true);

  console.log(name);
})();
