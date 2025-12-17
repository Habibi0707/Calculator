const resultInput = document.getElementById('result');

function insert(char) {
    if (resultInput.value === 'Error') {
        clearScreen();
    }
    // Replace 'x' with '*' for calculation
    resultInput.value += (char === 'x' ? '*' : char);
}

function clearScreen() {
    resultInput.value = '';
}

function deleteLast() {
    if (resultInput.value === 'Error') {
        clearScreen();
    } else {
        resultInput.value = resultInput.value.slice(0, -1);
    }
}

function calculate() {
    try {
        // Use a safer way to calculate than eval
        const result = new Function('return ' + resultInput.value)();
        if (isNaN(result) || !isFinite(result)) {
            resultInput.value = 'Error';
        } else {
            resultInput.value = result;
        }
    } catch (error) {
        resultInput.value = 'Error';
    }
}
