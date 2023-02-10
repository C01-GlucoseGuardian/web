import {login} from "./api";

const validateEmail = (email) => {
  return String(email)
  .toLowerCase()
  .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function onLoginBtnClick() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email && password && validateEmail(email)) {
    login(email, password)
    .then((response) => {
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

    })
    .catch((error) => {
      if (error.status == 401) {
        alert(response.msg);
      } else {
        alert("email o password non valide");
      }
      console.log(error);
    });
  } else {
    alert("Si è verificato un errore nel login");
  }
}

document.getElementById("avantilogin").onclick = onLoginBtnClick;

export default validateEmail;
