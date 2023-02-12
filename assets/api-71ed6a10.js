import{f as e}from"./api_wrapper-35c8f065.js";const n=(t,o)=>e("auth/login",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:{email:t,password:o}}),r=t=>e("dottore/getByStato",{method:"POST",body:{stato:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),i=(t,o)=>e("dottore/updateStato",{method:"POST",body:{codiceFiscale:t,stato:o},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),p=t=>e("paziente/get",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),c=t=>e("paziente/getByDottore",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),s=t=>e("farmaco/find",{method:"POST",body:{query:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),d=t=>e("feedback/getByPaziente",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),l=t=>e("terapia/getByPaziente",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),g=(t,o)=>e("terapia/update",{method:"POST",body:{idPaziente:t,farmaci:o},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}});export{p as a,l as b,d as c,i as d,c as e,s as f,r as g,n as l,g as u};