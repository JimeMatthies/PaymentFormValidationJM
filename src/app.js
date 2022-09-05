/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", evento => {
  evento.preventDefault();

  let errors = {};

  let rgxValidPassword = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  let cnnFeedback = document.querySelector("#cardFeedback");
  let cvcFeedback = document.querySelector("#cvcFeedback");
  let amountFeedback = document.querySelector("#amountFeedback");
  let firstnameFeedback = document.querySelector("#firstnameFeedback");
  let lastnameFeedback = document.querySelector("#lastnameFeedback");
  let cityFeedback = document.querySelector("#cityFeedback");
  let stateFeedback = document.querySelector("#stateFeedback");
  let zipFeedback = document.querySelector("#zipFeedback");

  let {
    ccn,
    cvc,
    amount,
    firstname,
    lastname,
    city,
    state,
    zip
  } = evento.target;

  if (ccn.value === "") {
    errors["ccn"] = "Card no puede estar vacio";
    ccn.classList.add("is-invalid");
  } else {
    ccn.classList.remove("is-invalid");
    delete errors["ccn"];
  }

  if (cvc.value === "") {
    errors["cvc"] = "cvc no puede estar vacio";
    cvc.classList.add("is-invalid");
  } else {
    cvc.classList.remove("is-invalid");
    delete errors["cvc"];
  }

  if (amount.value === "") {
    errors["amount"] = "amount no puede estar vacio";
    amount.classList.add("is-invalid");
  } else {
    amount.classList.remove("is-invalid");
    delete errors["amount"];
  }

  if (firstname.value === "") {
    errors["firstname"] = "firstname no puede estar vacio";
    firstname.classList.add("is-invalid");
  } else {
    firstname.classList.remove("is-invalid");
    delete errors["firstname"];
  }

  if (lastname.value === "") {
    errors["lastname"] = "lastname no puede estar vacio";
    lastname.classList.add("is-invalid");
  } else {
    lastname.classList.remove("is-invalid");
    delete errors["lastname"];
  }

  if (city.value === "") {
    errors["city"] = "city no puede estar vacio";
    city.classList.add("is-invalid");
  } else {
    city.classList.remove("is-invalid");
    delete errors["city"];
  }

  if (state.value === "") {
    errors["state"] = "state no puede estar vacio";
    state.classList.add("is-invalid");
  } else {
    state.classList.remove("is-invalid");
    delete errors["state"];
  }

  if (zip.value === "") {
    errors["zip"] = "zip no puede estar vacio";
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
    delete errors["zip"];
  }

  if (errors["card"]) {
    console.log(errors);
    if (errors["ccn"]) ccnFeedback.innerHTML = errors["ccn"];
    if (errors["cvc"]) cvcFeedback.innerHTML = errors["cvc"];
    if (errors["amount"]) amountFeedback.innerHTML = errors["amount"];
    if (errors["firstname"]) firstnameFeedback.innerHTML = errors["firstname"];
    if (errors["lastname"]) lastnameFeedback.innerHTML = errors["lastname"];
    if (errors["city"]) cityFeedback.innerHTML = errors["city"];
    if (errors["state"]) stateFeedback.innerHTML = errors["state"];
    if (errors["zip"]) zipFeedback.innerHTML = errors["zip"];
  } else {
    evento.target.submit();
  }
});
