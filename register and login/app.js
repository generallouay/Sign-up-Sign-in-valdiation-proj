const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.querySelector("#confirm-password");
const ageInput = document.getElementById("age");
const checkbox = document.querySelector("#checkbox");
const submit = document.getElementById("submit");
const errorMessage = document.getElementById("errorMessage");
const form = document.getElementById("myForm");
const allInputs = document.getElementsByClassName("redStuff");
const allParagraphs = document.getElementsByClassName("paragraph001");
const allInputsLoop = [...allInputs];
const allParagraphsLoop = [...allParagraphs];

const unfilledInforamtions = param => {
  param.preventDefault();

  allInputsLoop.forEach((a) => {
    if (a.value === "") {
      a.classList.add("inputsClass");
      a.previousElementSibling.previousElementSibling.textContent =
        "required field";
    } else {
      a.previousElementSibling.previousElementSibling.textContent = "";
    }
  });
  // if (checkbox.checked === false) {
  //   checkbox.nextElementSibling.classList.add("checkBoxClass");
  // } else {
  //   checkbox.nextElementSibling.classList.remove("checkBoxClass");
  // }

  usernameValidation();

}

const usernameValidation = () => {
  
  if (usernameInput.value.length <= 3) {
    errorMessage.textContent = "";
    errorMessage.style.color = "red";
    errorMessage.textContent = "the username is too short";
    usernameInput.classList.add("inputsClass");
  } else {
    usernameInput.classList.remove("inputsClass");
    errorMessage.textContent = "";
    if(usernameInput.value.indexOf(' ') === -1){
      emailValidation()
    }else{
      errorMessage.textContent = "";
      errorMessage.textContent = "the username cannot contain space";
      usernameInput.classList.add("inputsClass");
    }
    
  }
  if (allParagraphsLoop.some((z) => z.textContent === "required field")) {
    errorMessage.textContent = "";
  }else false;

}

const emailValidation = () => {
  
  if (!(emailInput.value.includes("@") && emailInput.value.includes("."))) {
    errorMessage.textContent = "";
    errorMessage.textContent = "Please enter a valid email ";
    emailInput.classList.add("inputsClass");
  } else {
    emailInput.classList.remove("inputsClass");
    errorMessage.textContent = "";
    passwordValidation();
  }

}

const passwordValidation = () => {
  
  if (passwordInput.value.length <= 6) {
    errorMessage.textContent = "";
    errorMessage.textContent = "Password is too short";
    passwordInput.classList.add("inputsClass");
  } else if (!passwordInput.value.includes(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)){ //g from html age input .toUpperCase()
    errorMessage.textContent = "";
    errorMessage.textContent = "Password must contain Numbers";
    passwordInput.classList.add("inputsClass");
  } else {
    passwordInput.classList.remove("inputsClass");
    errorMessage.textContent = "";
    passwordConfirmValidation();
  }

}

const passwordConfirmValidation = () => {
  
  if (passwordConfirmInput.value === passwordInput.value) {
    errorMessage.textContent = "";
    passwordConfirmInput.classList.remove("inputsClass");
    ageValidation();
  
  } else {
    errorMessage.textContent = "";
    errorMessage.textContent = "The passwords are not matching!";
    passwordConfirmInput.classList.add("inputsClass");
  }

}

const ageValidation = () => {
  
  if (ageInput.value <= 17) {
    errorMessage.textContent = "";
    errorMessage.textContent = `you're not old enough to participate`;
    ageInput.classList.add("inputsClass");
  } else {
    ageInput.classList.remove("inputsClass");
    errorMessage.textContent = "";
    checkboxValidation();
  }

}

const checkboxValidation = () => {
  
  
  if (checkbox.checked === false) {
    errorMessage.textContent = "";
    errorMessage.textContent = "please agree to our terms and conditions";
    // checkbox.nextElementSibling.classList.add("checkBoxClass");
  } else {
    checkIfExists();
  }

}

const checkIfExists = () => {
  const usersArray = [];
  const emailsArray = [];
  for (index = 0; index < localStorage.length; index++) {
    const storageKeys = localStorage.key(index);
    const storageValues = JSON.parse(localStorage.getItem(storageKeys)); //which means get the values of the storage keys
    usersArray.push(storageValues.username);
    emailsArray.push(storageValues.email)
  }
  if (usersArray.some(z => z.includes(usernameInput.value.toLowerCase()))){
    errorMessage.textContent = 'username already exists'
    errorMessage.style.color = 'red'
  }else{
    if (emailsArray.some(zb => zb.includes(emailInput.value.toLowerCase()))){
      errorMessage.textContent = 'email already exists'
      errorMessage.style.color = 'red'
    }else{
      saveAccount()
    }

  }


}

const saveAccount = () => {
  const userData = {
    username: usernameInput.value.toLowerCase(),
    email: emailInput.value.toLowerCase(),
    password: passwordInput.value,
    age: ageInput.value,
  };
  const storageKey = "user" + Date.now() + Math.round(Math.random() * 1000);
  localStorage.setItem(storageKey, JSON.stringify(userData));

  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  passwordConfirmInput.value = "";
  ageInput.value = "";
  checkbox.checked = false;
  // alert('You can now log in!')
  checkbox.nextElementSibling.classList.remove("checkBoxClass");
  errorMessage.textContent = "";
  errorMessage.textContent = "congrats you can now log in !";
  errorMessage.style.color = "Green";
  setTimeout(function(){errorMessage.textContent = "";} , 5000)
}

submit.addEventListener("click", unfilledInforamtions);














// if (
//     !usernameInput.value.includes(0 ||1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 )
//   ) {
//     errorMessage.textContent = "";
//     errorMessage.textContent = "the username should contain a number";
//   }

// console.log('user' + Math.round(Math.random() * 10000) + Date.now() );


// if (password.indexOf(' ') === -1){}


// if (ingredients.includes('flour')) {
//   //console.log('I AM GULTEN FREE, I CANNOT EAT THAT');
// }

// if (ingredients.indexOf('flour') !== -1) {
//   //console.log('I AM GULTEN FREE, I CANNOT EAT THAT');
// }