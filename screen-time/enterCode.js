// Get references to the passcode screen and the button to trigger it
const passcodeScreen = document.getElementById('passcodeScreen');
const enterCodeButton = document.getElementById('enter-code');


// Add an event listener to the button to show the passcode screen
enterCodeButton.addEventListener('click', () => {
    passcodeScreen.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

// Function to close the passcode screen
function closePasscodeScreen() {
    passcodeScreen.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
}

// Close the passcode screen when clicking the Cancel button
const cancelButtonCode = passcodeScreen.querySelector('.cancel-button');
if (cancelButtonCode) {
    cancelButtonCode.addEventListener('click', closePasscodeScreen);
}
