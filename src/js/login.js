import { login, loginOtp } from "./api";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const handleResponse = (response) => {
  localStorage.setItem("token", response.token);
  localStorage.setItem("cf", response.idUtente);
  localStorage.setItem("tipoUtente", response.tipoUtente);

  if (response.tipoUtente === 0) {
    window.location = "../admin/convalidation.html";
  } else if (response.tipoUtente === 1) {
    window.location = "../dataview/dashboard.html";
  } else {
    alert("Utilizza l'applicazione per loggarti!");
    localStorage.clear();
  }
};

function onLoginBtnClick() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email && password && validateEmail(email)) {
    if (document.getElementById("otpInputDiv").style.visibility === "visible") {
      let otpField = parseInt(document.getElementById("otpInput").value);
      if (otpField) {
        loginOtp(email, password, otpField)
          .then(handleResponse)
          .catch((error) => {
            if (error.status == 401) {
              document.getElementById("otpInputDiv").style.visibility =
                "visible";
              alert("Inserisci codice OTP per proseguire con il login");
            } else {
              alert("email o password non valide");
            }
            console.log(error);
          });
      } else {
        alert("L'otp deve essere esattamente 6 caratteri");
      }
    } else {
      login(email, password)
        .then()
        .catch((error) => {
          if (error.status == 401) {
            document.getElementById("otpInputDiv").style.visibility = "visible";
            alert("Inserisci codice OTP per proseguire con il login");
          } else {
            alert("email o password non valide");
          }
          console.log(error);
        });
    }
  } else {
    alert("Si è verificato un errore nel login");
  }
}

document.getElementById("avantilogin").onclick = onLoginBtnClick;

export default validateEmail;
