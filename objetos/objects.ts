(() => {
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Speed"],
  };

  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Clark Kent",
    age: 32,
    powers: ["Strenght"],
  };

  /* flash = {
    name: "Batman",
    powers: [],
    getName() {
      return this.name;
    },
  }; */

  console.log(flash);
  console.log(superman);
  console.log(flash.getName?.() || "No hay funcion");
})();
