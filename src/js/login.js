import { login } from "./api";

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
    
    if(email && password && validateEmail(email)) {
        login(email, password).then(response => {
            localStorage.setItem("token", response.token);
            localStorage.setItem("cf", response.idUtente);
            localStorage.setItem("tipoUtente", response.tipoUtente);

            if(response.tipoUtente === 0) {
                window.location = "../admin/index.html"
            } else if(response.tipoUtente === 1) {
                window.location = "../dottore/index.html"
            } else if(response.tipoUtente === 2) {
                window.location = "../paziente/index.html"
            } else if(response.tipoUtente === 3) {
                window.location = "../tutore/index.html"
            } else {
                alert("Si è verificato un errore server");
                console.log("user id non riconosciuto");
            }
        }).catch(error => {
            alert("Si è verificato un errore nel login");
            console.log(error);
        });
    } else {
        alert("email o password non valide");
    }
}

document.getElementById("avantilogin").onclick = onLoginBtnClick;

export default validateEmail;