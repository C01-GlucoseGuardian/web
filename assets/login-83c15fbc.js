import"./styles-fac82e35.js";import"./bootstrap.esm-19ee7221.js";import{l as a}from"./api-e9c52af7.js";import"./api_wrapper-35c8f065.js";const l=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);function i(){let e=document.getElementById("email").value,o=document.getElementById("password").value;e&&o&&l(e)?a(e,o).then(t=>{localStorage.setItem("token",t.token),localStorage.setItem("cf",t.idUtente),localStorage.setItem("tipoUtente",t.tipoUtente),t.tipoUtente===0?window.location="../admin/convalidation.html":t.tipoUtente===1?window.location="../dataview/dashboard.html":(alert("Utilizza l'applicazione per loggarti!"),localStorage.clear())}).catch(t=>{t.status==401?alert(response.msg):alert("email o password non valide"),console.log(t)}):alert("Si è verificato un errore nel login")}document.getElementById("avantilogin").onclick=i;
