(function () {
    button.addEventListener("click", function () {
        const input = textAreaInput.value.trim(),
            output = new TextParser(input);
        wordsQuantity.textContent = output.getWordsQuantity();
        longestWord.textContent = output.getLongestWord();
        shortestWord.textContent = output.getShortestWord();
        averageLength.textContent = output.getAverageLength()
    });

    /*function-constructor TextParser receives text input as parameter and returns object with four methods,
    each of which returns a value for one of four output fields: 1) quantity of words, 2) length of the longest word,
    3) length of the shortest word, 4) average length of words*/

    function TextParser(input) {
        const words = input.split(/[^a-zа-я]+/),
            wordsLengths = words.map(value => value.toString().length);
        this.getWordsQuantity = function () {
            return words.length;
        };
        this.getLongestWord = function () {
            return Math.max(...wordsLengths);
        };
        this.getShortestWord = function () {
            return Math.min(...wordsLengths);
        };
        this.getAverageLength = function () {
            const summOfLengths = wordsLengths.reduce((prev, current) => prev + current);
            return Math.round(summOfLengths/words.length);
        };
    }
}());