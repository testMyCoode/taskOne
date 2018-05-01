(function () {
button.addEventListener("click", function () {
    calculateQuantity();
    calculateMaxLength();
    calculateMinLength();
    calculateAverageLength();
});

function calculateQuantity() {
    quantity.textContent = getInput().inputToArray.length;
}

function calculateMaxLength() {
    max.textContent = Math.max(...getInput().arrayOfLengths);
}

function calculateMinLength() {
    min.textContent = Math.min(...getInput().arrayOfLengths);
}

function calculateAverageLength() {
    var length = getInput().inputToArray.length,
        reducedArray = getInput().arrayOfLengths.reduce(function (prev, current) {return prev + current});
        average.innerHTML = Math.round(reducedArray/length);
}

function getInput() {
   var inputToArray = textArea.value.trim().split(/[^a-zа-я]+/gi),
       arrayOfLengths = inputToArray.map(value => value.toString().length);
   return {
       inputToArray,
       arrayOfLengths
   };
}

}());

