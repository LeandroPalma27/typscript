(() => {
    enum AudioLevel {
        one = 1,
        two, 
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten
    }

    let currentAudioLevel = AudioLevel.ten;
    let currentAudioLevel2:AudioLevel = 10;
    console.log(currentAudioLevel);
    console.log(currentAudioLevel2);
    console.log(AudioLevel);
})();