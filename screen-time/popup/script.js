// Get a reference to the Cancel button
const cancelButton = document.getElementById('cancelButton');

// Get a reference to the popup menu
const popupMenuCloseVar = document.getElementById('popupMenu');

// Add a click event listener to the Cancel button
cancelButton.addEventListener('click', () => {
    // Hide the popup menu when the Cancel button is clicked
    popupMenuCloseVar.style.display = 'none';
});
