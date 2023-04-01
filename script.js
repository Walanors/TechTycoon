const form = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Authenticate user credentials
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      window.location.href = 'user-data.html';
    } else {
      alert('Invalid username or password.');
    }
  })
  .catch(error => {
    console.log(error);
    alert('Error logging in user');
  });
});
