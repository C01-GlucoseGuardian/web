import { getPaziente } from "./api";

document.addEventListener('DOMContentLoaded', () => {
  (function agenda(){
  let cf = localStorage.getItem("cfPaziente");
  getPaziente(cf)
  .then(paziente =>{
    alert(JSON.stringify(paziente))
    document.getElementById("nomepaziente").innerHTML = "Nome Paziente: " + paziente.nome + " " + paziente.cognome;
    let eta = calcolaEta(paziente.dataNascita)
    document.getElementById("etapaziente").innerHTML = "Età Paziente: " + eta;
  }
  )
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