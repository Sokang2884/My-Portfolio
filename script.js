// JavaScript Functionality
document.getElementById('sendEmail').addEventListener('click', function() {
    window.location.href = 'mailto:godalake@gmail.ke';
});

document.getElementById('callTelephone').addEventListener('click', function() {
    window.location.href = 'tel:+254733618874';
});

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the span element with id="currentYear"
document.getElementById('currentYear').textContent = currentYear;
