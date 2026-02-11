(() => {
    type Characters = {
        nick: string,
        ironman: string,
        activos: boolean,
        poder: number
    }

    const avengers: Characters = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey JR.',
        activos: true,
        poder: 1500
    }

    const {nick, ironman} = avengers;
    console.log(nick)

    const printAvenger = ({ironman, ...resto}: Characters): void => {
        console.log(ironman)
        console.log(resto)
    }

    printAvenger(avengers);

    const avengersArr: [string, string, number] = ["Ironman", "Spiderman", 20.1];
    const [tony, spiderman, hulk] = avengersArr;
    console.log(hulk)
})();