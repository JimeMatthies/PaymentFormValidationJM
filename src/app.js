/* eslint-disable */
import "bootstrap";
import "./style.css";

let paymentform = document.querySelector("#paymentform");
paymentform.addEventListener("submit", evento => {
  evento.preventDefault();

  let errors = {};

  let RegexOnlyLetter = /^[a-zA-Z]+$/;
  let RegexCardNumber = /^[0-9]{16}$/;
  let RegexCardCode = /^(\d{3}|\d{4})$/;

  let ccnNegativeFeedback = document.querySelector("#ccnNegativeFeedback");
  let ccnPositiveFeedback = document.querySelector("#ccnPositiveFeedback");
  let cvcNegativeFeedback = document.querySelector("#cvcNegativeFeedback");
  let cvcPositiveFeedback = document.querySelector("#cvcPositiveFeedback");
  let amountNegativeFeedback = document.querySelector(
    "#amountNegativeFeedback"
  );
  let amountPositiveFeedback = document.querySelector(
    "#amountPositiveFeedback"
  );
  let firstnameNegativeFeedback = document.querySelector(
    "#firstnameNegativeFeedback"
  );
  let firstnamePositiveFeedback = document.querySelector(
    "#firstnamePositiveFeedback"
  );
  let lastnameNegativeFeedback = document.querySelector(
    "#lastnameNegativeFeedback"
  );
  let lastnamePositiveFeedback = document.querySelector(
    "#lastnamePositiveFeedback"
  );
  let cityNegativeFeedback = document.querySelector("#cityNegativeFeedback");
  let cityPositiveFeedback = document.querySelector("#cityPositiveFeedback");
  let stateNegativeFeedback = document.querySelector("#stateNegativeFeedback");
  let statePositiveFeedback = document.querySelector("#statePositiveFeedback");
  let zipNegativeFeedback = document.querySelector("#zipNegativeFeedback");
  let zipPositiveFeedback = document.querySelector("#zipPositiveFeedback");
  let messageNegativeFeedback = document.querySelector(
    "#messageNegativeFeedback"
  );
  let messagePositiveFeedback = document.querySelector(
    "#messagePositiveFeedback"
  );

  let {
    ccn,
    cvc,
    amount,
    firstname,
    lastname,
    city,
    state,
    zip,
    message
  } = evento.target;

  if (ccn.value === "") {
    errors["ccn"] = "Debe ingresar un número de tarjeta";
    ccn.classList.add("is-invalid");
    ccn.classList.remove("is-valid");
  } else if (!RegexCardNumber.test(ccn.value)) {
    errors["ccn"] = "Numero de tarjeta inválido";
    ccn.classList.add("is-invalid");
    ccn.classList.remove("is-valid");
  } else {
    ccn.classList.remove("is-invalid");
    ccn.classList.add("is-valid");
    errors["ccn"] = "Tarjeta válida!";
  }

  if (cvc.value === "") {
    errors["cvc"] = "Debe ingresar código de verificación";
    cvc.classList.add("is-invalid");
    cvc.classList.remove("is-valid");
  } else if (!RegexCardCode.test(cvc.value)) {
    errors["cvc"] = "Código inválido";
    cvc.classList.add("is-invalid");
    cvc.classList.remove("is-valid");
  } else {
    cvc.classList.remove("is-invalid");
    cvc.classList.add("is-valid");
    errors["cvc"] = "Código válido!";
  }

  if (amount.value === "") {
    errors["amount"] = "Debe ingresar una cantidad";
    amount.classList.add("is-invalid");
    amount.classList.remove("is-valid");
  } else {
    amount.classList.remove("is-invalid");
    amount.classList.add("is-valid");
    errors["amount"] = "Cantidad válida!";
  }

  if (firstname.value === "") {
    errors["firstname"] = "Su nombre no puede estar vacio";
    firstname.classList.add("is-invalid");
    firstname.classList.remove("is-valid");
  } else if (!RegexOnlyLetter.test(firstname.value)) {
    errors["firstname"] = "Nombre debe contener solo letras";
    firstname.classList.add("is-invalid");
    firstname.classList.remove("is-valid");
  } else {
    firstname.classList.remove("is-invalid");
    firstname.classList.add("is-valid");
    errors["firstname"] = "Nombre válido!";
  }

  if (lastname.value === "") {
    errors["lastname"] = "Su apellido no puede estar vacio";
    lastname.classList.add("is-invalid");
    lastname.classList.remove("is-valid");
  } else if (!RegexOnlyLetter.test(lastname.value)) {
    errors["lastname"] = "Apellido debe contener solo letras";
    lastname.classList.add("is-invalid");
    lastname.classList.remove("is-valid");
  } else {
    lastname.classList.remove("is-invalid");
    lastname.classList.add("is-valid");
    errors["lastname"] = "Apellido válido!";
  }

  if (city.value === "") {
    errors["city"] = "Su ciudad no puede estar vacia";
    city.classList.add("is-invalid");
    city.classList.remove("is-valid");
  } else if (!RegexOnlyLetter.test(city.value)) {
    errors["city"] = "Ciudad debe contener solo letras";
    city.classList.add("is-invalid");
    city.classList.remove("is-valid");
  } else {
    city.classList.remove("is-invalid");
    city.classList.add("is-valid");
    errors["city"] = "Ciudad válida!";
  }

  if (state.value === "Pick a state") {
    errors["state"] = "Su estado no puede estar vacio";
    state.classList.add("is-invalid");
    state.classList.remove("is-valid");
  } else {
    state.classList.remove("is-invalid");
    state.classList.add("is-valid");
    errors["state"] = "Estado válido!";
  }

  if (zip.value === "") {
    errors["zip"] = "El código postal no puede estar vacio";
    zip.classList.add("is-invalid");
    zip.classList.remove("is-valid");
  } else {
    zip.classList.remove("is-invalid");
    zip.classList.add("is-valid");
    errors["zip"] = "Código postal válido!";
  }

  if (message.value === "") {
    errors["message"] = "Debe ingresar mensaje";
    message.classList.add("is-invalid");
    message.classList.remove("is-valid");
  } else {
    message.classList.remove("is-invalid");
    message.classList.add("is-valid");
    errors["message"] = "Mensaje válido!";
  }

  if (
    errors["ccn"] ||
    errors["cvc"] ||
    errors["amount"] ||
    errors["firstname"] ||
    errors["lastname"] ||
    errors["city"] ||
    errors["state"] ||
    errors["zip"] ||
    errors["message"]
  ) {
    console.log(errors);
    if (errors["ccn"]) ccnNegativeFeedback.innerHTML = errors["ccn"];
    if (errors["ccn"]) ccnPositiveFeedback.innerHTML = errors["ccn"];
    if (errors["cvc"]) cvcNegativeFeedback.innerHTML = errors["cvc"];
    if (errors["cvc"]) cvcPositiveFeedback.innerHTML = errors["cvc"];
    if (errors["amount"]) amountNegativeFeedback.innerHTML = errors["amount"];
    if (errors["amount"]) amountPositiveFeedback.innerHTML = errors["amount"];
    if (errors["firstname"])
      firstnameNegativeFeedback.innerHTML = errors["firstname"];
    if (errors["firstname"])
      firstnamePositiveFeedback.innerHTML = errors["firstname"];
    if (errors["lastname"])
      lastnameNegativeFeedback.innerHTML = errors["lastname"];
    if (errors["lastname"])
      lastnamePositiveFeedback.innerHTML = errors["lastname"];
    if (errors["city"]) cityNegativeFeedback.innerHTML = errors["city"];
    if (errors["city"]) cityPositiveFeedback.innerHTML = errors["city"];
    if (errors["state"]) stateNegativeFeedback.innerHTML = errors["state"];
    if (errors["state"]) statePositiveFeedback.innerHTML = errors["state"];
    if (errors["zip"]) zipNegativeFeedback.innerHTML = errors["zip"];
    if (errors["zip"]) zipPositiveFeedback.innerHTML = errors["zip"];
    if (errors["message"])
      messageNegativeFeedback.innerHTML = errors["message"];
    if (errors["message"])
      messagePositiveFeedback.innerHTML = errors["message"];
  } else {
    evento.target.submit();
  }
});
