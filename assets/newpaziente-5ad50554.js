import"./modulepreload-polyfill-ec808ebb.js";/* empty css               */import"./bootstrap.esm-19ee7221.js";import{f as z}from"./api_wrapper-35c8f065.js";import{f as I}from"./api-e9c52af7.js";document.addEventListener("DOMContentLoaded",()=>{const p=[];function y(e,t,o,n,i,a,l,m,s,d,u,g,v,r){return z("paziente/save",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:{codiceFiscale:e,nome:t,cognome:o,dataNascita:n,indirizzo:i,telefono:a,email:l,sesso:m,tipoDiabete:s,comorbilita:d,farmaciAssunti:u,periodoDiMonitoraggio:g,numeriUtili:v,terapia:r}})}document.getElementById("crea-button").addEventListener("click",function(){const e=document.getElementById("codiceFiscale").value,t=document.getElementById("nome").value,o=document.getElementById("cognome").value,n=document.getElementById("dataNascita").value,i=document.getElementById("indirizzo").value,a=document.getElementById("telefono").value,l=document.getElementById("email").value,m=document.getElementById("sesso").value,s=document.getElementById("tipoDiabete").value,d=document.getElementById("comorbilita").value,u=document.getElementById("farmaciAssunti").value,g=document.getElementById("periodoMonitoraggio").value,v=document.getElementById("numeriUtili").value.split(/, ?/).map(c=>{const f={};return f.numero=c,f}),r={farmaci:p};console.log(r),y(e,t,o,n,i,a,l,m,s,d,u,g,v,r).then(c=>alert(c.msg)).catch(c=>alert(c.response.msg))});function E(){let e=document.getElementById("cerca-farmaco").value;I(e).then(t=>{let o="";for(let n of t.list)o+=`
          <div class="row fw-normal" id="mostra-farmaci">
          <br>
            <div class="col-sm-6" id="nome-farmaco"><br>${n.nomeFarmaco}</div>
            <div class="col-sm-6" id="principio-attivo"><br>${n.principioAttivo}</div>
           </div>
           `;document.getElementById("lista-farmaci").innerHTML=o})}document.getElementById("cerca-button").onclick=E;function B(){const e=document.getElementById("nomeFarmaco").value,t=document.getElementById("dosaggio").value,o=document.getElementById("ora").value,n=document.getElementById("somministrazione").value,i=document.getElementById("noteAggiuntive").value;I(e).then(a=>{e.length>50?alert("il nome del farmaco supera il numero massimo di caratteri consentiti"):a.list.length==0&&alert("farmaco non riconosciuto"),console.log(a);const m=a.list[0].id;p.push({idFarmaco:m,dosaggio:t,orarioAssunzione:o,viaDiSomministrazione:n,noteAggiuntive:i}),e.length>50&&alert("Il campo nome farmaco supera i caratteri cnsentiti"),t||alert("Il campo dosaggio non può essere vuoto"),h(o)||alert("Il formato dell'ora non è valido"),n||alert("Il campo somministrazione non può essere vuoto"),i.length>300&&alert("Il campo note aggiuntive aggiuntive supera i caratteri consentiti"),document.getElementById("nomeFarmaco").value="",document.getElementById("dosaggio").value="",document.getElementById("ora").value="",document.getElementById("somministrazione").value="",document.getElementById("noteAggiuntive").value=""})}document.getElementById("aggiunta-terapia").onclick=B;function h(e){var t=/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;return t.test(e)}});
