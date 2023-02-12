import"./modulepreload-polyfill-ec808ebb.js";import"./bootstrap.esm-19ee7221.js";import{p as d,h as n}from"./api-59437bcf.js";import"./api_wrapper-35c8f065.js";document.addEventListener("DOMContentLoaded",()=>{let a="";function l(){let t=document.getElementById("cfTutore").value;console.log(t),n(t).then(o=>{console.log(o),a=`
           
          <div class="row fw-normal" id="tutoreStampaNome">
            <div class="col-md-4" id="nomeTutore"><br>Nome tutore: ${o.nome}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaCognome">
            <div class="col-md-4" id="cognomeTutore"><br>Cognome tutore: ${o.cognome}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaNascita">
            <div class="col-md-4" id="nascitaTutore"><br>Data Di Nascita: ${o.dataNascita}</div>
            <div class="col-md-4" id="buttonAssocia">
            <button type="button" class="btn btn-sm text-center" id="buttonAssociaTutore" onclick="associaTutore()" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 50px;padding-right: 50px;margin-left: -30px;">SELEZIONA TUTORE</button>

            </div>
            </div>
            <div class="row fw-normal" id="tutoreStampaEmail">
            <div class="col-md-4" id="emailTutore"><br>Email: ${o.email}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaEmail">
            <div class="col-md-4" id="telefonoTutore"><br>Numero di telefono: ${o.telefono}</div>
            </div>
   
        `,document.getElementById("stampaRicerca").innerHTML=a})}document.getElementById("cercaCf").onclick=l,window.associaTutore=function(){let t=document.getElementById("cfTutore").value,o=[];o.push({codiceFiscale:t}),console.log(cfTutore);let i=localStorage.getItem("cfPaziente");console.log(i);let c=d(i,o);console.log(c),c.then(e=>alert(e.msg)).catch(e=>alert(e.response.msg))}});
