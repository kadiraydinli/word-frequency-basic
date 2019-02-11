function factory(text) {
    var array = text.split(" ");
    var again = 0;
    var output = {};

    for (var i = 0; i < array.length; i++) {
        for (var k = 0; k < array.length; k++) {
            if (array[i] == array[k]) {
                again++;
            }
        }
        output[array[i] + " "] = again;
        again = 0;
    }
    return output;
}

module.exports.numberToWords = (text) => {
    return factory(text);
}

module.exports.numberToWordsLog = (text) => {
    console.log(factory(text));
}