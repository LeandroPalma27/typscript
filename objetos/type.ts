(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Speed"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 32,
    powers: ["Strenght"],
    getName() {
        return "HOLA";
    }
  };

  console.log(flash.getName?.());
})();
