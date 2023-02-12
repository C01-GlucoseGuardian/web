import"../styles-fac82e35.js";/* empty css                      */import"../bootstrap.esm-19ee7221.js";import{e as d}from"../api-71ed6a10.js";import"../api_wrapper-35c8f065.js";document.addEventListener("DOMContentLoaded",()=>{let t=0;(function(){let i=localStorage.getItem("cf");d(i).then(n=>{let e="";for(let o of n.list)e+=`
          <div class="row fw-normal" id="pazienti">
            <div class="col-sm-2" id="nome-paziente"><br>${o.nome}</div>
            <div class="col-sm-2" id="cognome-paziente"><br>${o.cognome}</div>
            <div class="col-sm-2" id="tipo-diabete"><br>${o.tipoDiabete}</div>
            
            <div class="col-sm-2">
              <a href="#" id="sezione-bottone-visualizza"><br>
                <button type="button" class="btn btn-sm text-center" id="button-dati-${t}" onclick="visualizzaDati(${t})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 50px;padding-right: 50px;margin-left: -30px;">Visualizza Dati</button>
              </a>
            </div>
            <div class="col-sm-2">
              <a href="#" id="sezione-bottone-agenda"><br>
                <button type="button" class="btn btn-sm text-center" id="button-paziente-${t}" onclick="visualizzaAgenda(${t})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 70px;padding-right: 70px;margin-left: -30px;">Agenda</button>
              </a>
            </div>
          </div>
        `,t++;document.getElementById("pazienti").innerHTML=e})})(),window.visualizzaDati=function(a){d(localStorage.getItem("cf")).then(i=>{let e=i.list[a].codiceFiscale;localStorage.setItem("cfPaziente",e),window.location="../dataview/dati.html"})}});
