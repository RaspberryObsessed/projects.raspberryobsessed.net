// Get references to the "Ask for more time" element and the popup menu
const askForMoreTime = document.querySelector('.ask-for');
const popupMenu = document.getElementById('popupMenu');

// Toggle the popup menu when "Ask for more time" is clicked
askForMoreTime.addEventListener('click', () => {
    popupMenu.style.display = 'block';
});