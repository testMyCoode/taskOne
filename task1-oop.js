(function () {
    button.addEventListener("click", function () {
        const input = textArea.value.trim();
        const output = new TextParser(input);
        quantity.textContent = output.getWordsQuantity();
        max.textContent = output.getLongestWord();
        min.textContent = output.getShortestWord();
        average.textContent = output.getAverageLength()
    });

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