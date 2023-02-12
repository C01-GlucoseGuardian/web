import {getTutore} from "./api";
import {pazienteUpdateTutori} from "./api";

document.addEventListener('DOMContentLoaded', () => {
  let html = '';


  function cercaTutore(){
    let cfTutore = document.getElementById("cfTutore").value;
    console.log(cfTutore);
    getTutore(cfTutore)
    .then(tutore => {
      console.log(tutore);

      html = `
           
          <div class="row fw-normal" id="tutoreStampaNome">
            <div class="col-md-4" id="nomeTutore"><br>Nome tutore: ${tutore.nome}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaCognome">
            <div class="col-md-4" id="cognomeTutore"><br>Cognome tutore: ${tutore.cognome}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaNascita">
            <div class="col-md-4" id="nascitaTutore"><br>Data Di Nascita: ${tutore.dataNascita}</div>
            <div class="col-md-4" id="buttonAssocia">
            <button type="button" class="btn btn-sm text-center" id="buttonAssociaTutore" onclick="associaTutore()" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 50px;padding-right: 50px;margin-left: -30px;">SELEZIONA TUTORE</button>

            </div>
            </div>
            <div class="row fw-normal" id="tutoreStampaEmail">
            <div class="col-md-4" id="emailTutore"><br>Email: ${tutore.email}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaEmail">
            <div class="col-md-4" id="telefonoTutore"><br>Numero di telefono: ${tutore.telefono}</div>
            </div>
   
        `;
      document.getElementById("stampaRicerca").innerHTML = html;
    })

  }
  document.getElementById("cercaCf").onclick = cercaTutore;


    window.associaTutore = function(){
     let cf = document.getElementById("cfTutore").value;
     let list = [];
     list.push({
       codiceFiscale: cf
     })
     console.log(cfTutore);
     let cfPaziente = localStorage.getItem("cfPaziente");
    console.log(cfPaziente);
    let risultato = pazienteUpdateTutori(cfPaziente, list);
      console.log(risultato);
    risultato.then(risposta => alert(risposta.msg)).catch(
        error => alert(error.response.msg))
  }
})