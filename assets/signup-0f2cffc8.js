import"./styles-fac82e35.js";import"./bootstrap.esm-19ee7221.js";import{f as v}from"./api_wrapper-35c8f065.js";document.addEventListener("DOMContentLoaded",()=>{function I(t,n,o,s,a,i,c,e,u,d,l,m,r){return v("dottore/save",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:{codiceFiscale:t,nome:n,cognome:o,dataNascita:s,indirizzo:a,telefono:i,email:c,password:e,sesso:u,specializzazione:d,codiceAlbo:l,nomeStruttura:m,indirizzoStruttura:r}})}document.getElementById("signupBtn").addEventListener("click",function(){const t=document.getElementById("signupCodiceFiscale").value,n=document.getElementById("signupNome").value,o=document.getElementById("signupCognome").value,s=document.getElementById("signupDataNascita").value,a=document.getElementById("signupIndirizzo").value,i=document.getElementById("signupTelefono").value,c=document.getElementById("signupMail").value,e=document.getElementById("signupPassword").value,u=document.getElementById("signupConfirmPassword").value,d=document.getElementById("signupSesso").value,l=document.getElementById("signupSpecializzazione").value,m=document.getElementById("signupCodIscAlbo").value,r=document.getElementById("signupNomeStruttura").value,p=document.getElementById("signupIndirizzoStruttura").value;t&&n&&o&&s&&a&&i&&c&&e&&d&&l&&m&&r&&p&&u?e!==u?alert("Le password non coincidono"):I(t,n,o,s,a,i,c,e,d,l,m,r,p).then(g=>alert(g.msg)).catch(g=>alert(g.response.msg)):alert("Completa tutti i campi")})});
