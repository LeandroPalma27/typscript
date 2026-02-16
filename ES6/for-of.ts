(() => {
    type Avenger = {
        name: string,
        weapon: string
    };

    const spiderman: Avenger = {
        name: "Peter Parker",
        weapon: 'Red'
    }

    const thor: Avenger = {
        name: "Thor Odinson",
        weapon: 'Martillo'
    }

    const ironman: Avenger = {
        name: "Tony Stark",
        weapon: 'Rayo'
    }

    const avengers: Avenger[] = [spiderman, thor, ironman];

    for (const avenger of avengers) {
        console.log([avenger.weapon, avenger.name].join(", "));
    }
})();