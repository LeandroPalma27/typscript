(() => {
  let flash: { name: string; age?: number; powers: string[] } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Speed"],
  };

  flash = {
    name: "Batman",
    /* age: 20, */
    powers: [],
    /* getNombre() {
      return this.name;
    }, */
  };

  console.log(flash);
})();
