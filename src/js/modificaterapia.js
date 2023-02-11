import {getPaziente} from "./api";
import {getTerapiaByPaziente} from "./api";
import {getPazienteByDottore} from "./api";
import {findFarmaco, getFarmaco} from "./api";
import {updateTerapia} from "./api";

document.addEventListener('DOMContentLoaded', () => {

  const listaFarmaco = [];

  (function mostraPaziente() {
    let codiceFiscale = localStorage.getItem("cfPaziente");
    getPaziente(codiceFiscale)
    .then(paziente => {
      document.getElementById("nomepaziente").innerHTML = "Nome Paziente: "
          + paziente.nome + " " + paziente.cognome;
      let eta = calcolaEta(paziente.dataNascita)
      document.getElementById("etapaziente").innerHTML = "Età Paziente: "
          + eta;

    })
  })();

  (function mostraTerapia() {
    let codiceFiscale = localStorage.getItem("cfPaziente");
    getTerapiaByPaziente(codiceFiscale)
    .then(terapia => {

      let html = '';
      for (let i = 0; i < terapia.farmaci.length; i++) {
        let farmaco = terapia.farmaci[i];
        //alert(JSON.stringify(farmaco))
        //alert(JSON.stringify(farmaco.nomeFarmaco))

        html += `
          <div class="row fw-normal" id="paragrafofarmaci">
            <div class="col-sm-3" id="nome-farmaco">${farmaco.nomeFarmaco}</div>
            <div class="col-sm-1" id="dosaggio-farmaco">${farmaco.dosaggio}</div>
            <div class="col-sm-1" id="orario-farmaco">${farmaco.orarioAssunzione}</div>
            <div class="col-sm-3" id="somministrazione-farmaco">${farmaco.viaDiSomministrazione}</div>
            </div>
            
        `;
      }
      document.getElementById("paragrafoFarmaci").innerHTML = html;

    })
  })();

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
      if (farmaci.list.length == 0) {
        alert("farmaco non riconosciuto")
      }

      const farmaco = farmaci.list[0];
      const idFarmaco = farmaco.id;
      listaFarmaco.push(
          {
            idFarmaco: idFarmaco,
            nomeFarmaco: nomeFarmaco,
            dosaggio: dosaggio,
            orarioAssunzione: ora,
            viaDiSomministrazione: somministrazione,
            noteAggiuntive: noteAggiuntive
          }
      )

      if (!dosaggio) {
        alert("Il campo dosaggio non può essere vuoto")
      }
      if (!checkTimeFormat(ora)) {
        alert("Il formato dell'ora non è valido")
      }
      if (!somministrazione) {
        alert("Il campo somministrazione non può essere vuoto")
      }
      if (noteAggiuntive.length > 300) {
        alert(
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

  function aggiornaTerapia() {
    let cf = localStorage.getItem("cfPaziente");
    let risultato = updateTerapia(cf, listaFarmaco);
    risultato.then(risposta => alert(risposta.msg)).catch(
        error => alert(error.response.msg))
    console.log(listaFarmacoasp
    )
    location.reload();

  }

  document.getElementById("aggiorna-terapia").onclick = aggiornaTerapia;

  function calcolaEta(dataNascita) {
    let parts = dataNascita.split("/");
    let giorno = parseInt(parts[0], 10);
    let mese = parseInt(parts[1], 10) - 1;
    let anno = parseInt(parts[2], 10);
    let dataNascitaOggetto = new Date(anno, mese, giorno);
    let oggi = new Date();
    let eta = oggi.getFullYear() - dataNascitaOggetto.getFullYear();
    let m = oggi.getMonth() - dataNascitaOggetto.getMonth();
    if (m < 0 || (m === 0 && oggi.getDate() < dataNascitaOggetto.getDate())) {
      eta--;
    }
    return eta;
  }

  function checkTimeFormat(time) {
    var timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  }

})