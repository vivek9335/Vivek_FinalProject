document.addEventListener('DOMContentLoaded', function() {
    const $ = selector => document.querySelector(selector);
    const emailPattern = /^\S+@\S+\.\S+$/;
  
    const showError = function(input, message) {
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = message;
      errorMessage.style.color = 'red';
    };
  
    const clearError = function(input) {
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = '';
    };
  
    const getErrorMsg = function() {
      let errorMessage = '';
  
      // Validate name
      const name = $('#name').value.trim();
      if (name === '') {
        showError($('#name'), 'This field is required.');
        errorMessage += 'Please enter your name.\n';
      } else if (name.length > 20) {
        showError($('#name'), 'Name should be 20 characters or less.');
        errorMessage += 'Name should be 20 characters or less.\n';
      } else {
        clearError($('#name'));
      }
  
      // Validate email
      const email = $('#email').value.trim();
      if (!emailPattern.test(email)) {
        showError($('#email'), 'Please enter a valid email address.');
        errorMessage += 'Please enter a valid email address.\n';
      } else {
        clearError($('#email'));
      }
  
      // Validate username
      const username = $('#username').value.trim();
      if (username === '') {
        showError($('#username'), 'This field is required.');
        errorMessage += 'Please enter a username.\n';
      } else if (username.length > 20) {
        showError($('#username'), 'Username should be 20 characters or less.');
        errorMessage += 'Username should be 20 characters or less.\n';
      } else {
        clearError($('#username'));
      }
  
      // Validate password
      const password = $('#password').value.trim();
      if (password === '') {
        showError($('#password'), 'This field is required.');
        errorMessage += 'Please enter a password.\n';
      } else if (password.length < 6) {
        showError($('#password'), 'Password should be at least 6 characters or digits.');
        errorMessage += 'Password should be at least 6 characters or digits.\n';
      } else {
        clearError($('#password'));
      }
  
      // Validate confirm password
      const confirmPassword = $('#confirm-password').value.trim();
      if (confirmPassword === '') {
        showError($('#confirm-password'), 'This field is required.');
        errorMessage += 'Please confirm your password.\n';
      } else if (confirmPassword !== password) {
        showError($('#confirm-password'), 'Passwords do not match.');
        errorMessage += 'Passwords do not match.\n';
      } else {
        clearError($('#confirm-password'));
      }
  
      return errorMessage;
    };
  
    const processEntry = function(event) {
      event.preventDefault();
      const errorMessage = getErrorMsg();
      if (errorMessage !== '') {
        return;
      }
  
      // Trim and update form fields
      const name = $('#name').value.trim();
      $('#name').value = name;
      const email = $('#email').value.trim();
      $('#email').value = email;
      const username = $('#username').value.trim();
      $('#username').value = username;
      const password = $('#password').value.trim();
      $('#password').value = password;
      const confirmPassword = $('#confirm-password').value.trim();
      $('#confirm-password').value = confirmPassword;
  
      // Display a success message
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Thank you for registering! You will be redirected to the home page.';
      successMessage.style.color = 'green';
      $('#message').appendChild(successMessage);
  
      // Redirect the user to the products page
      setTimeout(function() {
        window.location.href = '../index.html';
      }, 3000); // Redirect after 3 seconds
    };
  
    $('#registration-form').addEventListener('submit', processEntry);
  });