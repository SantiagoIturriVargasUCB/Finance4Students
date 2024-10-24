class Auth {
  constructor() {
    this.validEmail = 'validuser@example.com';
    this.validPassword = 'ValidPassword123';
  }

  authenticate(email, password) {
    if (!email || !password) return false;

    return email === this.validEmail && password === this.validPassword;
  }
}

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();  

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const auth = new Auth();
  const isAuthenticated = auth.authenticate(email, password);

  if (isAuthenticated) window.location.href = '../Dashboard/dashboard.html';
  else document.getElementById('errorMessage').textContent = 'Invalid email or password';
});
