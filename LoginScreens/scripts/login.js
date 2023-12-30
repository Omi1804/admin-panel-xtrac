document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".loginFormFields");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginFormFields = document.querySelector(".loginFormFields");
  const loginHeadings = document.querySelector(".loginHeadings");
  const loginButton = document.querySelector(".loginButton");
  const errorView = document.querySelector(".errorView");
  const errorHeadings = document.querySelector(".errorHeadings h1");
  const errorDescription = document.querySelector(".errorDescription");
  const tryAgainButton = document.querySelector(".tryAgainButton");
  const alreadyAccount = document.querySelector(".alreadyAccount");

  // Mock AJAX call
  function mockAJAXcall(callback) {
    setTimeout(() => {
      // Simulate an error
      callback(
        "Error404!",
        "The server could not process your request.The server could not process your request.The server could not process your request.The server could not process your request."
      );
    }, 2000);
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate email
    if (!emailInput.value || !validateEmail(emailInput.value)) {
      showToast("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (!passwordInput.value || !validatePassword(passwordInput.value)) {
      showToast(
        "Password must be at least 8 characters long and contain at least one lowercase, one uppercase, one special character, and one number."
      );
      return;
    }

    //AJAX call -----
    mockAJAXcall((errorMessage, errorDesc) => {
      showErrorView(errorMessage, errorDesc);
    });
  });

  tryAgainButton.addEventListener("click", function () {
    // Hide error view
    errorView.style.display = "none";

    // Show login form and headings
    location.reload();
    loginFormFields.style.display = "block";
    loginHeadings.style.display = "block";
    loginButton.style.display = "block";
  });

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  function validatePassword(password) {
    // Ensure the password meets the specified criteria
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?~\-]).{8,}$/;
    return regex.test(password);
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "rgba(0,0,0,0.7)";
    toast.style.color = "white";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "5px";
    toast.style.zIndex = "1000";
    document.body.appendChild(toast);

    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }

  function showErrorView(errorMessage, errorDesc) {
    // Hide login form and headings
    loginFormFields.style.display = "none";
    loginHeadings.style.display = "none";
    loginButton.style.display = "none";
    alreadyAccount.style.display = "none";

    // Update error messages and show error view
    errorHeadings.textContent = errorMessage;
    errorDescription.textContent = errorDesc;
    errorView.style.display = "flex";
  }
});
