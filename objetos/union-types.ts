(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let customVariable: string | Hero = "Leandro";
  console.log(typeof customVariable);

  customVariable = {
    name: "Barry Allen",
    age: 24,
    powers: ["Speed"],
  };
  console.log(typeof customVariable);
})();
