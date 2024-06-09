document.getElementById('resendLink').addEventListener('click', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    if(email.trim() !== '') {
        // Assuming you have a function to resend the email, replace this with your actual logic
        resendEmail(email);
    } else {
        alert('Please enter your email first.');
    }
});

function resendEmail(email) {
    // Add logic to resend the email here
    // For example, you can use AJAX to send a request to the server to resend the email
    // Here's a simple example of an AJAX request using Fetch API
    fetch('resend_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        if(response.ok) {
            alert('Email has been resent!');
        } else {
            alert('Failed to resend email. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}