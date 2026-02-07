(() => {
    const hero: string = 'SpiderMan';

    function returnName(): string {
        return hero;
    }

    const activarMensaje = (x?: string): string => {
        return 'hola';
    }

    console.log(typeof activarMensaje);
    const mensaje = activarMensaje();
})();