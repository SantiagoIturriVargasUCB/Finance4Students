import { authenticateUser } from './authenticateUser';


const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();  

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const isAuthenticated = authenticateUser(email, password);

  if (isAuthenticated) window.location.href = '../dashboard/dashboard.html';
  else document.getElementById('errorMessage').textContent = 'Invalid email or password';
});
