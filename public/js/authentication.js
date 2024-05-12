function goToLogin() {
  // Change the route to '/login' without full page reload
  history.pushState({}, "", "/login");
  document.querySelector(".login").style.display = "block";
}

function goToSignup() {
  // Change the route to '/login' without full page reload
  history.pushState({}, "", "/signup");
  document.querySelector(".signup").style.display = "block";
}

function navigateToHome() {
  window.location.href = '/'; // Navigate back to home
}
