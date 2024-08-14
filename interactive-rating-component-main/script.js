// Add click event listeners to rating buttons
document.querySelectorAll('.rating button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.rating button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add click event listener to the submit button
document.querySelector('.submit').addEventListener('click', function() {
    const activeButton = document.querySelector('.rating button.active');
    if (activeButton) {
        const rating = activeButton.getAttribute('data-rating');
        localStorage.setItem('selectedRating', rating);
        window.location.href = 'thanks.html'; // Redirect to thanks.html
    } else {
        alert('Please select a rating before submitting.');
    }
});