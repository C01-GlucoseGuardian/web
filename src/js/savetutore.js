import {fetchResource} from "./api_wrapper";

import swal from 'sweetalert';

document.addEventListener('DOMContentLoaded', () => {
  function saveTutore(
      codiceFiscale,
      nome,
      cognome,
      dataNascita,
      indirizzo,
      telefono,
      email,
      sesso,
      pazienteList
  ) {
    return fetchResource("tutore/save", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: {
        codiceFiscale,
        nome,
        cognome,
        dataNascita,
        indirizzo,
        telefono,
        email,
        sesso,
        pazienteList
      }
    });
  }

  document.getElementById("crea-button").addEventListener("click", function () {
    const codiceFiscale = document.getElementById("codiceFiscale").value;
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const dataNascita = document.getElementById("dataNascita").value;
    const indirizzo = document.getElementById("indirizzo").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const sesso = document.getElementById("sesso").value;

    let risultato = saveTutore(codiceFiscale, nome, cognome, dataNascita,
        indirizzo, telefono,
        email, sesso)
    risultato.then(risposta => swal(risposta.msg)).catch(
        error => swal(error.response.msg))
  });
})