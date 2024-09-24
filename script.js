// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple client-side validation (for demonstration purposes)
    if (email === 'student@example.com' && password === 'password123') {
      // Redirect to landing page
      window.location.href = 'landing.html';
    } else {
      alert('Invalid email or password');
    }
  });
  