document.addEventListener("DOMContentLoaded", function () {
  const signupPage = document.querySelector(".signupPage");
  const signupForm = document.querySelector(".formContent form");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const companyNameInput = document.getElementById("companyName");
  const referenceInput = document.getElementById("reference");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const logoAnimation = document.querySelector(".logo-animation");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate first name
    if (!firstNameInput.value.trim()) {
      showToast("Please enter your first name.");
      return;
    }

    // Validate last name
    if (!lastNameInput.value.trim()) {
      showToast("Please enter your last name.");
      return;
    }

    // Validate company name
    if (!companyNameInput.value.trim()) {
      showToast("Please enter your company name.");
      return;
    }

    // Validate email
    if (!emailInput.value || !validateEmail(emailInput.value)) {
      showToast("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (!passwordInput.value) {
      showToast("Please enter your password.");
      return;
    }

    // Validate confirm password
    if (passwordInput.value !== confirmPasswordInput.value) {
      showToast("Passwords do not match.");
      return;
    }

    animateSignupSuccess();
  });

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
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
});

const signupButton = document.querySelector(".signupButton");
const signupPage = document.querySelector(".signupPage");
const logoAnimation = document.querySelector(".logo-animation");
const successBrandIcon = document.querySelector(".successBrandIcon");
const logo = document.querySelector(".logo");
const brandName = document.querySelector(".successBrandIcon .brandName");
const successMsg = document.querySelector(".successMsg");
const successGif = document.querySelector(".successGif");

function animateSignupSuccess() {
  setTimeout(() => {
    signupPage.style.animation = "fadeOut .5s forwards";
    signupPage.style.transform = "translateX(-10vw)";

    setTimeout(() => {
      signupPage.style.opacity = 0;
      signupPage.style.display = "none";
    }, 500);

    logoAnimation.style.display = "flex";
    successBrandIcon.style.transform = "translateX(40vw) translateY(35vh)";
    successBrandIcon.style.animation = "fadeIn 2s forwards";

    setTimeout(() => {
      successBrandIcon.style.transform = "translateX(10vw) translateY(35vh)";
    }, 10);

    setTimeout(() => {
      logo.classList.add("blink");
    }, 1000);

    setTimeout(() => {
      logo.classList.remove("blink");
      successBrandIcon.style.transform = "translateX(0vw) translateY(35vh)";
    }, 3000);

    setTimeout(() => {
      brandName.style.animation = "fadeIn .5s forwards";
      brandName.style.opacity = 1;
    }, 3300);

    setTimeout(() => {
      successBrandIcon.style.transform = "translateY(-0vh)";
      setTimeout(() => {
        // Display the success message
        successMsg.style.opacity = "1";
        successGif.style.opacity = "1";
      }, 1000);
    }, 4000);
  }, 500);
}
