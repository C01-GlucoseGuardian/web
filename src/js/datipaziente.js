import {getPaziente} from "./api";
import {getTerapiaByPaziente} from "./api";
import {getPazienteByDottore} from "./api";

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
      console.log(terapia)
      let html = '';
      for (let i = 0; i < terapia.farmaci.length; i++){
        let farmaco = terapia.farmaci[i];
        //alert(JSON.stringify(farmaco))
        //alert(JSON.stringify(farmaco.nomeFarmaco))

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

})