import {fetchResource} from "./api_wrapper";
import {findFarmaco} from "./api";

import swal from 'sweetalert';


document.addEventListener('DOMContentLoaded', () => {
  const listaFarmaco = [];

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
      //mode: "cors",
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
        terapia
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
    const tipoDiabete = document.getElementById("tipoDiabete").value;
    const comorbilita = document.getElementById("comorbilita").value;
    const farmaciAssunti = document.getElementById("farmaciAssunti").value;
    const periodoDiMonitoraggio = document.getElementById(
        "periodoMonitoraggio").value;
    const numeriUtili = document.getElementById("numeriUtili").value.split(
        /, ?/).map(x => {
      const numero = {}
      ;numero.numero = x;
      return numero;
    });
    const terapia = {farmaci: listaFarmaco};
    console.log(terapia);
    let risultato = savePaziente(codiceFiscale, nome, cognome, dataNascita,
        indirizzo, telefono,
        email, sesso, tipoDiabete, comorbilita, farmaciAssunti,
        periodoDiMonitoraggio, numeriUtili, terapia)
    risultato.then(risposta => swal(risposta.msg)).catch(
        error => swal(error.response.msg))

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

  function salvaTerapia() {
    const nomeFarmaco = document.getElementById("nomeFarmaco").value;
    const dosaggio = document.getElementById("dosaggio").value;
    const ora = document.getElementById("ora").value;
    const somministrazione = document.getElementById("somministrazione").value;
    const noteAggiuntive = document.getElementById("noteAggiuntive").value;
    findFarmaco(nomeFarmaco)
    .then(farmaci => {
      if (nomeFarmaco.length > 50) {
                swal("il nome del farmaco supera il numero massimo di caratteri consentiti")
                } else if (farmaci.list.length == 0) {
                               swal("farmaco non riconosciuto")
                             }
      console.log(farmaci);
      const farmaco = farmaci.list[0];
      const idFarmaco = farmaco.id;
      listaFarmaco.push(
          {
            idFarmaco: idFarmaco,
            dosaggio: dosaggio,
            orarioAssunzione: ora,
            viaDiSomministrazione: somministrazione,
            noteAggiuntive: noteAggiuntive
          }
      )

      if (nomeFarmaco.length > 50) {
        swal("Il campo nome farmaco supera i caratteri cnsentiti")
      }

      if (!dosaggio) {
        swal("Il campo dosaggio non può essere vuoto")
      }
      if (!checkTimeFormat(ora)) {
        swal("Il formato dell'ora non è valido")
      }
      if (!somministrazione) {
        swal("Il campo somministrazione non può essere vuoto")
      }
      if (noteAggiuntive.length > 300) {
        swal(
            "Il campo note aggiuntive aggiuntive supera i caratteri consentiti")
      }

      document.getElementById("nomeFarmaco").value = "";
      document.getElementById("dosaggio").value = "";
      document.getElementById("ora").value = "";
      document.getElementById("somministrazione").value = "";
      document.getElementById("noteAggiuntive").value = "";
    })

  }

  document.getElementById("aggiunta-terapia").onclick = salvaTerapia;

  function checkTimeFormat(time) {
    var timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  }
})