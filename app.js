const form = document.getElementById("form");
const email = document.getElementById("email");
const lastName = document.getElementById("lastname");
const firstName = document.getElementById("firstname");
const telephone = document.getElementById("tel");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");



form.addEventListener("click", (e) => {
    e.preventDefault()

    checkInput()
})

function checkInput() {
    //get the values from the inputs
  
    const firstNameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const telePhoneValue = tel.value.trim();
    let strongChecker = new RegExp("(?=.[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"),
    mediumChecker = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))")
  
  
    if (firstNameValue === "") {
      //show error
      //show error class
  
      setErrorFor(username, "Field cannot be blank");
    } else {
      setSuccessFor(username);
    }
  
    if (telePhoneValue === "") {
      //show error
      //show error class
  
      setErrorFor(tel, "Please Enter Telephone input");
    } else {
      setSuccessFor(username);
    }
  
    if (lastnameValue === "") {
      //show error
      //show error class
  
      setErrorFor(lastName, "Last Name Field cannot be blank");
    } else {
      setSuccessFor(lastName);
    }
  
    if (emailValue === "") {
      setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "Email is not valid");
    } else {
      setSuccessFor(email);
    }
  
    if (passwordValue === "") {
      setErrorFor(password, "Password Cannot be Empty");
    } else if(strongChecker.test(passwordValue)) {
      setSuccessFor(password)
    } else if (mediumChecker.test(passwordValue)) {
      setMediumFor(password, "password not strong")
    } else {
      setErrorFor(password, "password too weak")
    }
  
  
  }
  
  function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
  
    const small = formControl.querySelector("small");
  
    //add error message inside small
  
    small.innerText = message;
  
    //add error class
  
    formControl.className = "form-control error";
  }
  
  
  function setMediumFor(input, message) {
    const formControl = input.parentElement; // .form-control
  
    const small = formControl.querySelector("small");
  
    //add error message inside small
  
    small.innerText = message;
  
    //add error class
  
    formControl.className = "form-control medium";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    formControl.className = "newsletter__input success";
  }
  
  
  
  function isEmail(email) {
    //regex for email
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
  }
  