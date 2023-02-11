import {getDottoreByStato} from "./api";
import {dottoreUpdateStato} from "./api";

document.addEventListener('DOMContentLoaded', () => {
  let i = 0;
  (function getDottore() {
    getDottoreByStato(0)
    .then(listDottori => {
      let html = '';
      for (let dottore of listDottori.list) {

        html += `
          <div class="row fw-normal" id="dati-dottore">
            <div class="col-sm-2" id="nome-dottore">${dottore.nome}</div>
            <div class="col-sm-2" id="cognome-dottore">${dottore.cognome}</div>
            <div class="col-sm-2" id="specializzazione">${dottore.specializzazione}</div>
            <div class="col-sm-2" id="codice-albo">${dottore.codiceAlbo}</div>
            <div class="col-sm-2">
              <a href="#" id="link-modifica">
                <button type="button" class="btn btn-sm text-center" id="approva-button-${i}" onclick="approva(${i})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 70px;padding-right: 70px;margin-left: -30px;">APPROVA</button>
              </a>
            </div>
            <div class="col-sm-2">
              <a href="#" id="link-modifica">
                <button type="button" class="btn btn-sm text-center" id="rimuovi-button-${i}" onclick="rimuovi(${i})" style="background-color: darkred;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 70px;padding-right: 70px;margin-left: -30px;">RIMUOVI</button>
              </a>
            </div>
          </div>
        `;
        i++;
      }
      document.getElementById("dati-dottore").innerHTML = html;
    });
  })();
  window.approva = function (id) {
    getDottoreByStato(0)
    .then(listDottori => {
      let dottore = listDottori.list[id];
      let codiceFiscale = dottore.codiceFiscale;
      dottoreUpdateStato(codiceFiscale, 1);
      alert("Dottore con cf: " + codiceFiscale + " stato aggiornato");
      location.reload();

    });
  };
  window.rimuovi = function (id) {
    getDottoreByStato(0)
    .then(listDottori => {
      let dottore = listDottori.list[id];
      let codiceFiscale = dottore.codiceFiscale;
      dottoreUpdateStato(codiceFiscale, 2);
      alert("Dottore con cf: " + codiceFiscale + " stato aggiornato");
      location.reload();

    });
  };
});
