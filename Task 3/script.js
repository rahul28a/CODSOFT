document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.dataset.value;
            if (value === '=') {
                try {
                    currentInput = eval(currentInput);
                    display.textContent = currentInput;
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else if (value === 'C') {
                currentInput = '';
                display.textContent = '';
            } else if (value === 'AC') {
                currentInput = '';
                display.textContent = '';
            } else {
                currentInput += value;
                display.textContent += value;
            }
        });
    });
});