const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit'), function(event) {
  event.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  // Example credentials
  const correctUsername = 'admin';
  const correctPassword = 'password123';

  if (username === correctUsername && password === correctPassword) {
    // Redirect to next page
    window.location.href = 'next-page.html';
  } else {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Invalid username or password';
    form.username.value = '';}}
