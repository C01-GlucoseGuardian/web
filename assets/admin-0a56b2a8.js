import"./styles-fac82e35.js";import"./bootstrap.esm-19ee7221.js";import{g as a,d as n}from"./api-1d682227.js";import"./api_wrapper-35c8f065.js";document.addEventListener("DOMContentLoaded",()=>{let t=0;(function(){a(0).then(i=>{let d="";for(let o of i.list)d+=`
          <div class="row fw-normal" id="dati-dottore">
            <div class="col-sm-2" id="nome-dottore">${o.nome}</div>
            <div class="col-sm-2" id="cognome-dottore">${o.cognome}</div>
            <div class="col-sm-2" id="specializzazione">${o.specializzazione}</div>
            <div class="col-sm-2" id="codice-albo">${o.codiceAlbo}</div>
            <div class="col-sm-2">
              <a href="#" id="link-modifica">
                <button type="button" class="btn btn-sm text-center" id="approva-button-${t}" onclick="approva(${t})" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 70px;padding-right: 70px;margin-left: -30px;">APPROVA</button>
              </a>
            </div>
            <div class="col-sm-2">
              <a href="#" id="link-modifica">
                <button type="button" class="btn btn-sm text-center" id="rimuovi-button-${t}" onclick="rimuovi(${t})" style="background-color: darkred;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 70px;padding-right: 70px;margin-left: -30px;">RIMUOVI</button>
              </a>
            </div>
          </div>
        `,t++;document.getElementById("dati-dottore").innerHTML=d})})(),window.approva=function(e){a(0).then(i=>{let o=i.list[e].codiceFiscale;n(o,1),alert("Dottore con cf: "+o+" stato aggiornato"),location.reload()})},window.rimuovi=function(e){a(0).then(i=>{let o=i.list[e].codiceFiscale;n(o,2),alert("Dottore con cf: "+o+" stato aggiornato"),location.reload()})}});
