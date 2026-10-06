//Inclusive
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//excludes the max as Math.random returns 0 <= number < 1
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomFloatRoundedInclusive(min, max, decimals = 2) {
    const factor = 10 ** decimals;

    const minInt = Math.ceil(min * factor);
    const maxInt = Math.floot(max * factor);

    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt) / factor;
}