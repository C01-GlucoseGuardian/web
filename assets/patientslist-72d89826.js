import"./modulepreload-polyfill-ec808ebb.js";import"./bootstrap.esm-19ee7221.js";/* empty css               */import{e as l}from"./api-59437bcf.js";import"./api_wrapper-35c8f065.js";document.addEventListener("DOMContentLoaded",()=>{let i=0;(function(){let e=localStorage.getItem("cf");l(e).then(n=>{let t="";for(let o of n.list)t+=`
          <div class="row fw-normal" id="pazienti">
            <div class="col-sm-2" id="nome-paziente"><br>${o.nome}</div>
            <div class="col-sm-2" id="cognome-paziente"><br>${o.cognome}</div>
            <div class="col-sm-2" id="tipo-diabete"><br>${o.tipoDiabete}</div>
            
            <div class="col-sm-2">
              <a href="#" id="sezione-bottone-visualizza"><br>
                <button type="button" class="btn btn-sm text-center" id="button-dati-${i}" onclick="visualizzaDati(${i})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 50px;padding-right: 50px;margin-left: -30px;">Visualizza Dati</button>
              </a>
            </div>
          </div>
        `,i++;document.getElementById("pazienti").innerHTML=t})})(),window.visualizzaDati=function(a){l(localStorage.getItem("cf")).then(e=>{let t=e.list[a].codiceFiscale;localStorage.setItem("cfPaziente",t),window.location="../dataview/dati.html"})}});
