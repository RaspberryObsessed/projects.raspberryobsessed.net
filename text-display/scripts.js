// JavaScript code for simulating the LCD display
const lcdText = document.getElementById("display-text");
const lcdPreview = document.getElementById("lcd-preview");

lcdText.addEventListener("input", updateLCDPreview);

function updateLCDPreview() {
    const text = lcdText.value;
    const numRows = 4;
    const numCols = 20;
    const maxChars = numRows * numCols;

    // Truncate the text if it exceeds the display capacity
    if (text.length > maxChars) {
        lcdText.value = text.slice(0, maxChars);
        return;
    }

    lcdPreview.innerHTML = ""; // Clear the existing preview

    for (let row = 0; row < numRows; row++) {
        const lcdRow = document.createElement("div");
        lcdRow.classList.add("lcd-row");

        for (let col = 0; col < numCols; col++) {
            const lcdPixel = document.createElement("div");
            lcdPixel.classList.add("lcd-pixel");

            const charIndex = row * numCols + col;
            if (charIndex < text.length) {
                lcdPixel.textContent = text[charIndex];
            } else {
                lcdPixel.textContent = "";
            }

            lcdRow.appendChild(lcdPixel);
        }

        lcdPreview.appendChild(lcdRow);
    }
}

// Initial update of the LCD preview
updateLCDPreview();