const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('isAuthenticated');

  window.location.href = '../LogIn/login.html';
});
