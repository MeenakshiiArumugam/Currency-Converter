// Selectors
const clearBtn = document.getElementById('clear--btn');
const convertBtn = document.getElementById('convert--btn');
const input = document.getElementById('amount');
const current = document.getElementById('current--select');
const output = document.getElementById('output--select');
let convertedValues = [];
const currentDisplay = document.querySelector('.top__current');
const outputDisplay = document.querySelector('.top__output');

// Events
convertBtn.addEventListener('click', converter);
document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {converter();}
});
clearBtn.addEventListener('click', () => {
    input.value = '';
});

// Functions
function converter() {
    // Clear previous converted values
    convertedValues = [];
    
    // Convert based on selected currencies
    convertCurrency(1, 1, 1.0); // USD
    convertCurrency(1, 2, 0.83); // EUR
    convertCurrency(1, 3, 104.99); // JPY
    convertCurrency(1, 4, 0.72); // GBP
    convertCurrency(1, 5, 1.29); // AUD
    convertCurrency(1, 6, 1.26); // CAD
    convertCurrency(1, 7, 0.89); // CHF
    convertCurrency(1, 8, 75.92); // INR
    convertCurrency(2, 1, 1.21); // EUR to USD
    convertCurrency(2, 2, 1.0); // EUR to EUR
    convertCurrency(2, 3, 127.24); // EUR to JPY
    convertCurrency(2, 4, 0.87); // EUR to GBP
    convertCurrency(2, 5, 1.56); // EUR to AUD
    convertCurrency(2, 6, 1.56); // EUR to CAD
    convertCurrency(2, 7, 1.08); // EUR to CHF
    convertCurrency(2, 8, 88.85); // EUR to INR
    convertCurrency(3, 1, 0.0095); // JPY to USD
    convertCurrency(3, 2, 0.0079); // JPY to EUR
    convertCurrency(3, 3, 1.0); // JPY to JPY
    convertCurrency(3, 4, 0.0069); // JPY to GBP
    convertCurrency(3, 5, 0.012); // JPY to AUD
    convertCurrency(3, 6, 0.012); // JPY to CAD
    convertCurrency(3, 7, 0.0085); // JPY to CHF
    convertCurrency(3, 8, 0.0075); // JPY to INR
    convertCurrency(4, 1, 1.39); // GBP to USD
    convertCurrency(4, 2, 1.14); // GBP to EUR
    convertCurrency(4, 3, 145.4); // GBP to JPY
    convertCurrency(4, 4, 1.0); // GBP to GBP
    convertCurrency(4, 5, 1.79); // GBP to AUD
    convertCurrency(4, 6, 1.76); // GBP to CAD
    convertCurrency(4, 7, 1.24); // GBP to CHF
    convertCurrency(4, 8, 103.07); // GBP to INR
    convertCurrency(5, 1, 0.78); // AUD to USD
    convertCurrency(5, 2, 0.64); // AUD to EUR
    convertCurrency(5, 3, 81.47); // AUD to JPY
    convertCurrency(5, 4, 0.56); // AUD to GBP
    convertCurrency(5, 5, 1.0); // AUD to AUD
    convertCurrency(5, 6, 0.98); // AUD to CAD
    convertCurrency(5, 7, 1.02); // AUD to CHF
    convertCurrency(5, 8, 52.37); // AUD to INR
    convertCurrency(6, 1, 0.79); // CAD to USD
    convertCurrency(6, 2, 0.65); // CAD to EUR
    convertCurrency(6, 3, 82.77); // CAD to JPY
    convertCurrency(6, 4, 0.57); // CAD to GBP
    convertCurrency(6, 5, 1.02); // CAD to AUD
    convertCurrency(6, 6, 1.0); // CAD to CAD
    convertCurrency(6, 7, 0.7); // CAD to CHF
    convertCurrency(6, 8, 55.55); // CAD to INR
    convertCurrency(7, 1, 1.12); // CHF to USD
    convertCurrency(7, 2, 0.93); // CHF to EUR
    convertCurrency(7, 3, 117.73); // CHF to JPY
    convertCurrency(7, 4, 0.81); // CHF to GBP
    convertCurrency(7, 5, 1.44); // CHF to AUD
    convertCurrency(7, 6, 1.42); // CHF to CAD
    convertCurrency(7, 7, 1.0); // CHF to CHF
    convertCurrency(7, 8, 84.78); // CHF to INR
    convertCurrency(8, 1, 0.013); // INR to USD
    convertCurrency(8, 2, 0.011); // INR to EUR
    convertCurrency(8, 3, 1.39); // INR to JPY
    convertCurrency(8, 4, 0.009); // INR to GBP
    convertCurrency(8, 5, 0.016); // INR to AUD
    convertCurrency(8, 6, 0.016); // INR to CAD
    convertCurrency(8, 7, 0.012); // INR to CHF
    convertCurrency(8, 8, 1.0); // INR to INR
    
    // Update display
    updateDisplay();
}

function updateDisplay() {
    outputDisplay.innerText = convertedValues[convertedValues.length - 1];
    currentDisplay.innerText = input.value;
}

function convertCurrency(from, to, rate) {
    // Check if current and output currencies match the function arguments
    if (parseInt(current.value) === from && parseInt(output.value) === to) {
        // Convert and push the converted value to the array
        convertedValues.push(Math.round(input.value * rate * 10) / 10);
    }
}
