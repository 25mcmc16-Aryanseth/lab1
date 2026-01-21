document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form submission

  let isValid = true;

  // Name validation
  let name = document.getElementById("name").value;
  if (!/^[A-Za-z]+$/.test(name)) {
    nameErr.innerText = " Only alphabets allowed";
    isValid = false;
  } else nameErr.innerText = "";

  // Email validation
  let email = document.getElementById("email").value;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailErr.innerText = " Invalid email format";
    isValid = false;
  } else emailErr.innerText = "";

  // Password validation
  let password = document.getElementById("password").value;
  if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!]).{8,}/.test(password)) {
    passErr.innerText = " Weak password";
    isValid = false;
  } else passErr.innerText = "";

  // Age validation
  let dob = new Date(document.getElementById("dob").value);
  let age = new Date().getFullYear() - dob.getFullYear();
  if (age < 18) {
    dobErr.innerText = " Must be 18+";
    isValid = false;
  } else dobErr.innerText = "";

  // Phone validation
  let phone = document.getElementById("phone").value;
  if (!/^\d{10}$/.test(phone)) {
    phoneErr.innerText = " Enter 10 digits";
    isValid = false;
  } else phoneErr.innerText = "";

  if (isValid) {
    alert("Registration Successful!");
  }
});
