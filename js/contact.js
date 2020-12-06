// contact
const form = document.querySelector("#contactForm");
const firstName =  document.querySelector("#firstName");
const lastName =  document.querySelector("#lastName");
const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const messageArea = document.querySelector("#messageArea");
const messageError = document.querySelector("#messageError");

const email  = document.querySelector("#email");
const emailError  = document.querySelector("#emailError");
const emailRegEx = /\S+@\S+\.\S+/


const validationMsg = document.querySelector(".validationMsg");

validateForm = function(){
  event.preventDefault();

  if (firstName.value.trim().length < 1 || lastName.value.trim().length < 1) {
    nameError.style.display = "block";
  }
  else{
    nameError.style.display = "none";
  };

  if (subject.value.trim().length < 1) {
    subjectError.style.display = "block";
  }
  else{
    subjectError.style.display = "none";
  };

  if (messageArea.value.trim().length < 10) {
    messageError.style.display = "block";
  }
  else{
    messageError.style.display = "none";
  };

  if (emailRegEx.test(email.value) === false) {
    emailError.style.display = "block";
  }
  else{
    emailError.style.display = "none";
  };

  if (firstName.value.trim().length > 0 && lastName.value.trim().length > 0 
  && subject.value.trim().length > 0
  && messageArea.value.trim().length > 9
  && emailRegEx.test(email.value) === true){
    validationMsg.innerText = "Your form was submitted successfully."
    validationMsg.style.textAlign = "center"
    validationMsg.style.color = "lightgreen"
    validationMsg.style.border = "thin solid lightgreen"
    validationMsg.style.padding = "10px"
  }
  else{
    validationMsg.innerText = "There was an error submitting your form."
    validationMsg.style.textAlign = "center"
    validationMsg.style.color = "red"
    validationMsg.style.border = "thin solid red"
    validationMsg.style.padding = "10px"
  };
};

form.addEventListener("submit", validateForm);