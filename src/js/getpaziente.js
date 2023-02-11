import {getPazienteByDottore} from "./api";

document.addEventListener('DOMContentLoaded', () => {
  let i = 0;
  (function getPazienti() {
    let codiceFiscale = localStorage.getItem("cf");

    getPazienteByDottore(codiceFiscale)


    .then(listPazienti => {
      let html = '';
      for (let paziente of listPazienti.list) {

        html += `
          <div class="row fw-normal" id="pazienti">
            <div class="col-sm-2" id="nome-paziente"><br>${paziente.nome}</div>
            <div class="col-sm-2" id="cognome-paziente"><br>${paziente.cognome}</div>
            <div class="col-sm-2" id="tipo-diabete"><br>${paziente.tipoDiabete}</div>
            
            <div class="col-sm-2">
              <a href="#" id="sezione-bottone-visualizza"><br>
                <button type="button" class="btn btn-sm text-center" id="button-dati-${i}" onclick="visualizzaDati(${i})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 50px;padding-right: 50px;margin-left: -30px;">Visualizza Dati</button>
              </a>
            </div>
            <div class="col-sm-2">
              <a href="#" id="sezione-bottone-agenda"><br>
                <button type="button" class="btn btn-sm text-center" id="button-paziente-${i}" onclick="visualizzaAgenda(${i})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 70px;padding-right: 70px;margin-left: -30px;">Agenda</button>
              </a>
            </div>
          </div>
        `;
        i++;
      }
      document.getElementById("pazienti").innerHTML = html;
    });
  })();
  window.visualizzaDati = function (id) {
    getPazienteByDottore(localStorage.getItem("cf"))
    .then(listPazienti => {
      let paziente = listPazienti.list[id];
      let codiceFiscale = paziente.codiceFiscale;
      localStorage.setItem("cfPaziente", codiceFiscale)

    });
  };
  window.visualizzaAgenda = function (id) {
    getPazienteByDottore(localStorage.getItem("cf"))
    .then(listPazienti => {
      let paziente = listPazienti.list[id];
      let codiceFiscale = paziente.codiceFiscale;
      localStorage.setItem("cfPaziente", codiceFiscale)
      window.location = "../dataview/agenda.html";

    });
  };
});
