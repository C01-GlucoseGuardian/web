import {fetchResource} from "./api_wrapper";
import {findFarmaco, getFarmaco} from "./api";

document.addEventListener('DOMContentLoaded', () => {

  function savePaziente(
      codiceFiscale,
      nome,
      cognome,
      dataNascita,
      indirizzo,
      telefono,
      email,
      sesso,
      tipoDiabete,
      comorbilita,
      farmaciAssunti,
      periodoDiMonitoraggio,
      numeriUtili,
      terapia
  ) {
    return fetchResource("paziente/save", {
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
        tipoDiabete,
        comorbilita,
        farmaciAssunti,
        periodoDiMonitoraggio,
        numeriUtili,
        terapia,
      }

    });

  }

  document.getElementById("crea-button").addEventListener("click", function () {
    const codiceFiscale = document.getElementById("codiceFiscale").value;
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const dataNascita = "01/02/2023"//document.getElementById("dataNascita").value;
    const indirizzo = document.getElementById("indirizzo").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const sesso = document.getElementById("sesso").value;
    const tipoDiabete = document.getElementById("tipoDiabete").value;
    const comorbilita = document.getElementById("comorbilita").value;
    const farmaciAssunti = document.getElementById("farmaciAssunti").value;
    const periodoDiMonitoraggio = 0;
    const numeriUtili = document.getElementById("numeriUtili").value.split(
        /, ?/).map(x => {
      const numero = {}
      ;numero.numero = x;
      return numero;
    });
    const terapia = {farmaci: []};
    savePaziente(codiceFiscale, nome, cognome, dataNascita, indirizzo, telefono,
        email, sesso, tipoDiabete, comorbilita, farmaciAssunti,
        periodoDiMonitoraggio, numeriUtili, terapia)
  });

  function find() {
    let nomeFarmaco = document.getElementById("cerca-farmaco").value;
    findFarmaco(nomeFarmaco)
    .then(listFarmaci => {
      let html = '';
      for (let farmaco of listFarmaci.list) {
        html += `
          <div class="row fw-normal" id="mostra-farmaci">
          <br>
            <div class="col-sm-6" id="nome-farmaco"><br>${farmaco.nomeFarmaco}</div>
            <div class="col-sm-6" id="principio-attivo"><br>${farmaco.principioAttivo}</div>
           </div>
           `;

      }

      document.getElementById("lista-farmaci").innerHTML = html;

    })

  }
  document.getElementById("cerca-button").onclick = find;


})