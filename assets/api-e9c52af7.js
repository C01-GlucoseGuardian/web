import{f as e}from"./api_wrapper-35c8f065.js";const h=(t,o)=>e("auth/login",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:{email:t,password:o}}),g=t=>e("dottore/getByStato",{method:"POST",body:{stato:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),u=(t,o)=>e("dottore/updateStato",{method:"POST",body:{codiceFiscale:t,stato:o},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),y=t=>e("paziente/get",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),m=t=>e("paziente/getByDottore",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),T=t=>e("farmaco/find",{method:"POST",body:{query:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),S=t=>e("feedback/getByPaziente",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),j=t=>e("tutore/get",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),A=(t,o,a,n,p,r,i,c,s,d)=>e("notifica/send",{method:"POST",body:{messaggio:o,data:a,ora:n,pazienteOggetto:r,pazienteDestinatario:i},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),z=t=>e("terapia/getByPaziente",{method:"POST",body:{codiceFiscale:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),B=(t,o)=>e("terapia/update",{method:"POST",body:{idPaziente:t,farmaci:o},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),P=(t,o)=>e("paziente/updateTutori",{method:"POST",body:{idPaziente:t,farmaci:o},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}});export{y as a,z as b,S as c,u as d,j as e,T as f,g,m as h,h as l,P as p,A as s,B as u};
