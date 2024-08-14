// Retrieve the selected rating from localStorage
const selectedRating = localStorage.getItem('selectedRating');

// Get the element by ID
const selectedRatingElement = document.getElementById('selected-rating');

// Update the text content with the value of selectedRating
if (selectedRating) {
    selectedRatingElement.textContent = `You selected ${selectedRating} out of 5`;
} else {
    selectedRatingElement.textContent = 'No rating selected';
}