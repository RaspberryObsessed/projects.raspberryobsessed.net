// Get references to the popup menu, overlay, and the trigger element (e.g., a button)
const popupMenu = document.getElementById('popupMenu');
const overlay = document.getElementById('overlay');
const openMenuButton = document.getElementById('ask-for'); // Replace with the actual trigger element (e.g., button)
const cancelButton = document.getElementById('cancelButton');


// Function to open the popup menu
function openMenu() {
    popupMenu.style.display = 'block';
    overlay.classList.add('show'); // Show the overlay
    console.log("Opened Menu");
}

// Function to close the popup menu
function closeMenu() {
    popupMenu.style.display = 'none';
    overlay.classList.remove('show'); // Hide the overlay
    console.log("Closed Menu");
}

// Add event listeners to trigger the menu
openMenuButton.addEventListener('click', openMenu);
cancelButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);