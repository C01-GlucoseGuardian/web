import{a as p,b as I,f as s,u as y}from"./api-59437bcf.js";document.addEventListener("DOMContentLoaded",()=>{const c=[];(function(){let t=localStorage.getItem("cfPaziente");p(t).then(e=>{document.getElementById("nomepaziente").innerHTML="Nome Paziente: "+e.nome+" "+e.cognome;let o=f(e.dataNascita);document.getElementById("etapaziente").innerHTML="Età Paziente: "+o})})(),function(){let t=localStorage.getItem("cfPaziente");I(t).then(e=>{let o="";for(let i=0;i<e.farmaci.length;i++){let n=e.farmaci[i];o+=`
          <div class="row fw-normal" id="paragrafofarmaci">
            <div class="col-sm-1" id="nome-farmaco">${n.nomeFarmaco}</div>
            <div class="col-sm-1" id="dosaggio-farmaco">${n.dosaggio}</div>
            <div class="col-sm-1" id="orario-farmaco">${n.orarioAssunzione}</div>
            <div class="col-sm-1" id="somministrazione-farmaco">${n.viaDiSomministrazione}</div>
            </div>
            
        `}document.getElementById("paragrafoFarmaci").innerHTML=o})}();function d(){let a=document.getElementById("cerca-farmaco").value;s(a).then(t=>{let e="",o="";for(let i of t.list)o=`
         <div class="row fw-normal" id="proprietà-find-farmaci">
          <br>
            <div class="col-sm-6" id="nome-farmaco" style="font-weight: bold"><br>Nome Farmaco</div>
            <div class="col-sm-6" id="principio-attivo" style="font-weight: bold"><br>Principio Attivo</div>
           </div>
        `,e+=`
          <div class="row fw-normal" id="mostra-farmaci">
          <br>
            <div class="col-sm-6" id="nome-farmaco"><br>${i.nomeFarmaco}</div>
            <div class="col-sm-6" id="principio-attivo"><br>${i.principioAttivo}</div>
           </div>
           `;document.getElementById("proprietà-find-farmaci").innerHTML=o,document.getElementById("lista-farmaci").innerHTML=e})}document.getElementById("cerca-button").onclick=d;function g(){const a=document.getElementById("nomeFarmaco").value,t=document.getElementById("dosaggio").value,e=document.getElementById("ora").value,o=document.getElementById("somministrazione").value,i=document.getElementById("noteAggiuntive").value;s(a).then(n=>{a.length>50?alert("il nome del farmaco supera il numero massimo di caratteri consentiti"):n.list.length==0&&alert("farmaco non riconosciuto");const r=n.list[0].id;c.push({idFarmaco:r,nomeFarmaco:a,dosaggio:t,orarioAssunzione:e,viaDiSomministrazione:o,noteAggiuntive:i}),t||alert("Il campo dosaggio non può essere vuoto"),v(e)||alert("Il formato dell'ora non è valido"),o||alert("Il campo somministrazione non può essere vuoto"),i.length>300&&alert("Il campo note aggiuntive aggiuntive supera i caratteri consentiti"),document.getElementById("nomeFarmaco").value="",document.getElementById("dosaggio").value="",document.getElementById("ora").value="",document.getElementById("somministrazione").value="",document.getElementById("noteAggiuntive").value=""})}document.getElementById("aggiunta-terapia").onclick=g;function u(){let a=localStorage.getItem("cfPaziente");y(a,c).then(e=>{alert(e.msg),location.reload()}).catch(e=>alert(e.response.msg)),console.log(c)}document.getElementById("aggiorna-terapia").onclick=u;function f(a){let t=a.split("/"),e=parseInt(t[0],10),o=parseInt(t[1],10)-1,i=parseInt(t[2],10),n=new Date(i,o,e),m=new Date,r=m.getFullYear()-n.getFullYear(),l=m.getMonth()-n.getMonth();return(l<0||l===0&&m.getDate()<n.getDate())&&r--,r}function v(a){var t=/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;return t.test(a)}});
