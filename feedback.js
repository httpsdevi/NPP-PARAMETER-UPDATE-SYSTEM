document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!name ||!email ||!message) {
      alert('All fields are required.');
      return false;
  }

  // Here you would typically send the form data to a server or process it in some way
  alert('Form submitted successfully');

  // Reset form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  return true;
});
