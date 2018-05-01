(function () {
    button.addEventListener("click", function () {
        const input = textArea.value.trim();
        const output = new TextParser(input);
        quantity.textContent = output.getQuantity();
        max.textContent = output.getMaxLength();
        min.textContent = output.getMinLength();
        average.textContent = output.getAverageLength()
    });

    function TextParser(input) {
        const inputToArray = input.split(/[^a-zа-я]+/gi),
              arrayOfLengths = inputToArray.map(value => value.toString().length);
        this.getQuantity = function () {
             return inputToArray.length;
        };
        this.getMaxLength = function () {
             return Math.max(...arrayOfLengths);
        };
        this.getMinLength = function () {
             return Math.min(...arrayOfLengths);
        };
        this.getAverageLength = function () {
             const reducedArray = arrayOfLengths.reduce((prev, current) => prev + current);
             return Math.round(reducedArray/inputToArray.length);
        };
    }
}());

