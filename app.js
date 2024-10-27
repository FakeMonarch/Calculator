function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    let expression = display.value;

    try {
        // Handle square root (√)
        if (expression.includes('√')) {
            // Replace '√' with Math.sqrt and extract the number after it
            expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');
        }

        // Handle square (²)
        if (expression.includes('²')) {
            expression = expression.replace(/(\d+)²/g, 'Math.pow($1, 2)');
        }

        // Handle percentage (%)
        if (expression.includes('%')) {
            expression = expression.replace(/(\d+)%/g, '($1/100)');
        }

        display.value = eval(expression);
    } catch (error) {
        display.value = "Hata!";
    }
}

// Handle keyboard inputs
document.addEventListener("keydown", function (event) {
    const key = event.key;
    const display = document.getElementById("display");

    if (!isNaN(key) || key === ".") {
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }
});
