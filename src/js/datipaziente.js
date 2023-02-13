import {getPaziente} from "./api";
import {getTerapiaByPaziente} from "./api";
import {getPazienteByDottore} from "./api";
import {getFeedBackByPaziente} from "./api";
import {sendNotifica} from "./api";

import swal from 'sweetalert';


document.addEventListener('DOMContentLoaded', () => {

  (function mostraPaziente() {
    let codiceFiscale = localStorage.getItem("cfPaziente");
    getPaziente(codiceFiscale)
    .then(paziente => {
      document.getElementById("nome-paziente").innerHTML = "Nome Paziente: "
          + paziente.nome + " " + paziente.cognome;
      let eta = calcolaEta(paziente.dataNascita)
      document.getElementById("eta-paziente").innerHTML = "Età Paziente: "
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
        //swal(JSON.stringify(farmaco))
        //swal(JSON.stringify(farmaco.nomeFarmaco))

        html += `
          <p id="terapia-paziente">Nome Farmaco:${farmaco.nomeFarmaco} -  Dosaggio: ${farmaco.dosaggio} - Orario Assunzione: ${farmaco.orarioAssunzione} - Via di Somministrazione: ${farmaco.viaDiSomministrazione} - Note Aggiuntive: ${farmaco.viaDiSomministrazione}</p><br>
          `;
      }

      //let html = '';
      //for (let i) {

      //}

      document.getElementById("terapia-paziente").innerHTML = html;

    })
  })();

  (function getFeedback() {
    let codiceFiscale = localStorage.getItem("cfPaziente");
    getFeedBackByPaziente(codiceFiscale)
    .then(feedback => {

      let html = '';
      for (let i of feedback.list) {
        html += `
          <p id="feedback-list">Ore Sonno: ${i.oreSonno} -  Stato Salute: ${i.statoSalute} - Dolori: ${i.dolori} - Svenimenti: ${i.svenimenti} - Data: ${i.data}</p><br>
          `;
      }
      document.getElementById("feedback-list").innerHTML = html;
    })
  })();

  function inviaNotifica(){
    let messaggio = "prova";
    console.log(messaggio);
    let ora = getCurrentTime();
    let data = getCurrentDate();
    let pazienteDestinatario = localStorage.getItem("cfPaziente");
    let pazienteOggetto = localStorage.getItem("cfPaziente");
    let notifica =({
       messaggio,
       data,
       ora,
      pazienteOggetto,
      pazienteDestinatario
    });
    console.log(notifica);
    sendNotifica(notifica).then(risposta => swal(risposta.msg)).catch(
        error => swal(error.response.msg))


  }
  document.getElementById("riscontro-positivo").onclick = inviaNotifica;

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

  function getCurrentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  function getCurrentDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;

    return year + "-" + month + "-" + day;
  }




})