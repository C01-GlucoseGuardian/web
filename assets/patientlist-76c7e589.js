import"./styles-fac82e35.js";/* empty css                     */import"./bootstrap.esm-19ee7221.js";import{a as l}from"./api-1d682227.js";import"./api_wrapper-35c8f065.js";document.addEventListener("DOMContentLoaded",()=>{let e=0;(function(){let i=localStorage.getItem("cf");l(i).then(o=>{let t="";for(let n of o.list)t+=`
          <div class="row fw-normal" id="pazienti">
            <div class="col-sm-2" id="nome-paziente">${n.nome}</div>
            <div class="col-sm-2" id="cognome-paziente">${n.cognome}</div>
            <div class="col-sm-2" id="tipo-diabete">${n.tipoDiabete}</div>
            
            <div class="col-sm-2">
              <a href="#" id="sezione-bottone-visualizza">
                <button type="button" class="btn btn-sm text-center" id="button-dati-${e}" onclick="visualizzaDati(${e})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 50px;padding-right: 50px;margin-left: -30px;">Visualizza Dati</button>
              </a>
            </div>
            <div class="col-sm-2">
              <a href="#" id="sezione-bottone-agenda">
                <button type="button" class="btn btn-sm text-center" id="button-paziente-${e}" onclick="visualizzaAgenda(${e})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 70px;padding-right: 70px;margin-left: -30px;">Agenda</button>
              </a>
            </div>
          </div>
        `,e++;document.getElementById("pazienti").innerHTML=t})})(),window.visualizzaDati=function(a){l(localStorage.getItem("cf")).then(i=>{let t=i.list[a].codiceFiscale;localStorage.setItem("cfPaziente",t)})},window.visualizzaAgenda=function(a){l(localStorage.getItem("cf")).then(i=>{let t=i.list[a].codiceFiscale;localStorage.setItem("cfPaziente",t),window.location="../dataview/agenda.html"})}});
