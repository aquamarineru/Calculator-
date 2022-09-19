/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

class Calculator {
    constructor(history, equals, clear) {
        this._history = [];
        this._equals = eval;
        this._clear = 0;
    }
    /*  clear() {
         this.history.length = 0;
     } */
}

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
    if (operatorPressed) {
        calculatorScreen.innerHTML = "";
        operatorPressed = false;
    }
    calculatorScreen.innerHTML += val;
    valuesArray.push(val);
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
    if (key.innerText !== "=") {
        key.addEventListener("click", (e) => print(e.target.innerText));
    }
});
document.querySelector("#calculator .clear").addEventListener("click", () => {
    calculatorScreen.innerHTML = "";
    storedValue = 0;
    valuesArray = [];
    lastValue = 0;
});
// "+" operator
document.querySelector(".plus").addEventListener("click", () => {
    evaluateOperations();
    operatorPressed = true;
    lastOperator = "+";
});
// "-" operator
document.querySelector(".minus").addEventListener("click", () => {
    evaluateOperations();
    operatorPressed = true;
    lastOperator = "-";
});
// "x" operator
document.querySelector(".multiply").addEventListener("click", () => {
    evaluateOperations();
    operatorPressed = true;
    lastOperator = "*";
});
// "/" operator
document.querySelector(".divide").addEventListener("click", () => {
    evaluateOperations();
    operatorPressed = true;
    lastOperator = "/";
});
//"=" operator
document.querySelector(".eval").addEventListener("click", () => {
    if (storedValue) {
        evaluateOperations();
        operatorPressed = true;
        lastOperator = "=";
    }
});
 // Implement here the event when the = key is pressed
