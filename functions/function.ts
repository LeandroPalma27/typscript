(() => {
    const hero: string = 'SpiderMan';

    function returnName(): string {
        return hero;
    }

    const activarMensaje = (): string => {
        return 'hola';
    }

    console.log(typeof activarMensaje);
    const mensaje = activarMensaje();
})();