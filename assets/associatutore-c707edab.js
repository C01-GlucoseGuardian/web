import"./modulepreload-polyfill-ec808ebb.js";/* empty css               */import"./index-19ee7221.js";import{p as l,h as n}from"./api-59437bcf.js";import"./api_wrapper-35c8f065.js";document.addEventListener("DOMContentLoaded",()=>{let a="";function d(){let o=document.getElementById("cfTutore").value;console.log(o),n(o).then(t=>{a=`
           
          <div class="row fw-normal" id="tutoreStampaNome">
            <div class="col-md-4" id="nomeTutore"><br>Nome tutore: ${t.nome}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaCognome">
            <div class="col-md-4" id="cognomeTutore"><br>Cognome tutore: ${t.cognome}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaNascita">
            <div class="col-md-4" id="nascitaTutore"><br>Data Di Nascita: ${t.dataNascita}</div>
            <div class="col-md-4" id="buttonAssocia">
            <button type="button" class="btn btn-sm text-center" id="buttonAssociaTutore" onclick="associaTutore()" style="background-color: #a5d8d9;color: white;font-size: 12px;border-radius: 13px;font-weight: bold;padding-left: 50px;padding-right: 50px;margin-left: -30px;">SELEZIONA TUTORE</button>

            </div>
            </div>
            <div class="row fw-normal" id="tutoreStampaEmail">
            <div class="col-md-4" id="emailTutore"><br>Email: ${t.email}</div>
            </div>
            <div class="row fw-normal" id="tutoreStampaEmail">
            <div class="col-md-4" id="telefonoTutore"><br>Numero di telefono: ${t.telefono}</div>
            </div>
   
        `,document.getElementById("stampaRicerca").innerHTML=a})}document.getElementById("cercaCf").onclick=d,window.associaTutore=function(){let o=document.getElementById("cfTutore").value,t=[];t.push({codiceFiscale:o}),console.log(cfTutore);let i=localStorage.getItem("cfPaziente");console.log(i);let c=l(i,t);console.log(c),c.then(e=>alert(e.msg)).catch(e=>alert(e.response.msg))}});
