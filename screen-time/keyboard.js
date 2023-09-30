// Initialize an empty passcode array to store entered digits
const passcode = [];

// Function to handle key presses (1 to 9)
function handleKeyPress(keyValue) {
    // Check if the passcode has less than 4 digits
    if (passcode.length < 4) {
        passcode.push(keyValue); // Add the digit to the passcode array

        // Update the display of the passcode digits (you'll need to implement this part)
        updatePasscodeDisplay();

        // If all 4 digits have been entered, print and clear the passcode
        if (passcode.length === 4) {
            printAndClearPasscode();
        }
    }
}

// Function to handle backspace key
function handleBackspace() {
    // Remove the last digit from the passcode array
    if (passcode.length > 0) {
        passcode.pop();

        // Update the display of the passcode digits (you'll need to implement this part)
        updatePasscodeDisplay();
    }
}

// Function to print and clear the passcode after a delay
function printAndClearPasscode() {
    // Convert the passcode array to a 4-digit string
    const enteredCode = passcode.join('');

    // Print the entered code
    console.log('Entered Passcode:', enteredCode);

    // Clear the passcode array and update the display
    passcode.length = 0;
    updatePasscodeDisplay();

    // Delay the clearing of passcode circles by 1.5 seconds
    setTimeout(() => {
        updatePasscodeDisplay();
    }, 1500);
}

// Function to update the display of passcode digits
function updatePasscodeDisplay() {
    // Get all the passcode digit circles
    const digitCircles = document.querySelectorAll('.digit');

    // Loop through the passcode array and update the circles
    passcode.forEach((digit, index) => {
        // Get the corresponding digit circle
        const circle = digitCircles[index];

        // Fill or clear the circle based on whether a digit is present
        if (digit) {
            circle.classList.add('filled');
        } else {
            circle.classList.remove('filled');
        }
    });

    // Clear any remaining circles
    for (let i = passcode.length; i < digitCircles.length; i++) {
        digitCircles[i].classList.remove('filled');
    }
}

// Add event listeners for key presses (1 to 9) excluding the backspace
document.querySelectorAll('.keyboard-key:not(.backspace)').forEach((keyElement) => {
    keyElement.addEventListener('click', () => {
        const keyValue = keyElement.querySelector('.key-value').textContent;
        handleKeyPress(keyValue);
    });
});

document.querySelector('.keyboard-key.backspace').addEventListener('click', () => {
    handleBackspace();
});
