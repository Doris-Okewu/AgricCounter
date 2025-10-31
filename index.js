// DOM manipulation and event handling
const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0; // Initialize counter

// Function to update the display
function updateDisplay() {
    counterDisplay.textContent = count;
    // Change color based on count for visual feedback
    counterDisplay.style.color = count > 0 ? '#1b5e20' : count < 0 ? '#d32f2f' : '#424242';
}

// Increment button event listener
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// Decrement button event listener with zero boundary
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    } else {
        // Visual feedback for boundary
        counterDisplay.style.color = '#d32f2f';
        setTimeout(() => updateDisplay(), 300);
    }
});

// Reset button event listener
resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();