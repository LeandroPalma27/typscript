(() => {
    interface User {
        name: string;
    }

    function callBatman(): string {
        return 'xd';
    }

    const updateUser = (): User => {
        return { name: 'Leandro' };
    };

    const response = callBatman();
    const response2 = updateUser();
    console.log(response)
    console.log(response2.name)
})();