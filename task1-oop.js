(function () {
    button.addEventListener("click", function () {
        const input = textArea.value.trim();
        const output = new TextParser(input);
        quantity.textContent = output.getWordsQuantity();
        max.textContent = output.getMaxLength();
        min.textContent = output.getMinLength();
        average.textContent = output.getAverageLength()
    });

    function TextParser(input) {
        const words = input.split(/[^a-zа-я]+/),
              wordsLengths = words.map(value => value.toString().length);
        this.getWordsQuantity = function () {
             return words.length;
        };
        this.getMaxLength = function () {
             return Math.max(...wordsLengths);
        };
        this.getMinLength = function () {
             return Math.min(...wordsLengths);
        };
        this.getAverageLength = function () {
             const reducedArray = wordsLengths.reduce((prev, current) => prev + current);
             return Math.round(reducedArray/words.length);
        };
    }
}());

