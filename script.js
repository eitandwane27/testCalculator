const buttons = document.querySelectorAll(".btn");
const displayy = document.getElementById("display");

let firstNum = "";
let secNum = "";
let isSecond = false;
let operator = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        displayy.value += button.textContent;
        const val = button.textContent;
        //“If the value is a number, do this…”
        if (!isNaN(val)) {
            appendNumber(val);
        } else if (val == "+" || val == "-" || val == "*" || val == "/") {
            chooseOperator(val);
        }
    });
});

const c = document.getElementById("delete");
c.addEventListener("click", () => {
    clearButton();
});

function appendNumber(number) {
    if (!isSecond) {
        firstNum += number;
        displayy.value = firstNum;
    } else {
        secNum += number;
        displayy.value = secNum;
    }
}

function chooseOperator(op) {
    //make sure to have a first number
    if (firstNum === "") return;
    operator = op;
    isSecond = true;
}

function calculate() {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secNum);
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else if (operator === "*") {
        result = num1 * num2;
    }

    displayy.value = result;
    firstNum = result;
    secNum = "";
    operator = "";
}

const e = document.getElementById("eq");
e.addEventListener("click", calculate);

function clearButton() {
    displayy.value = "";
    isSecond = false;
    firstNum = "";
    secNum = "";
    operator = "";
}
