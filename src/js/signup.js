import {ApiError} from "./api_wrapper";
import {fetchResource} from "./api_wrapper";

import swal from 'sweetalert';

document.addEventListener('DOMContentLoaded', () => {
  function saveDottore(
      codiceFiscale,
      nome,
      cognome,
      dataNascita,
      indirizzo,
      telefono,
      email,
      password,
      sesso,
      specializzazione,
      codiceAlbo,
      nomeStruttura,
      indirizzoStruttura
  ) {

    return fetchResource("dottore/save", {
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
        password,
        sesso,
        specializzazione,
        codiceAlbo,
        nomeStruttura,
        indirizzoStruttura,
      }
    });

  }

  document.getElementById("signupBtn").addEventListener("click", function () {
    const codiceFiscale = document.getElementById("signupCodiceFiscale").value;
    const nome = document.getElementById("signupNome").value;
    const cognome = document.getElementById("signupCognome").value;
    const dataNascita = document.getElementById("signupDataNascita").value;
    const indirizzo = document.getElementById("signupIndirizzo").value;
    const telefono = document.getElementById("signupTelefono").value;
    const email = document.getElementById("signupMail").value;
    const password = document.getElementById("signupPassword").value;
    const sesso = document.getElementById("signupSesso").value;
    const specializzazione = document.getElementById(
        "signupSpecializzazione").value;
    const codiceAlbo = document.getElementById("signupCodIscAlbo").value;
    const nomeStruttura = document.getElementById("signupNomeStruttura").value;
    const indirizzoStruttura = document.getElementById(
        "signupIndirizzoStruttura").value;

    let risultato = saveDottore(codiceFiscale, nome, cognome, dataNascita,
        indirizzo, telefono, email, password, sesso, specializzazione,
        codiceAlbo, nomeStruttura, indirizzoStruttura)
    risultato.then(risposta => swal(risposta.msg)).catch(
        error => swal(error.response.msg))

  });
})
