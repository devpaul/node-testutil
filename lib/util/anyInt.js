module.exports = randomInt;

function randomInt(max, min) {
    if(!max)
        throw new Error("missing max value");
    if(min == null)
        min = 0;
    if(max < min)
        throw new Error("max (" + max + ") is less than min (" + min + ")");

    return Math.floor(Math.random() * (max - min)) + min;
}