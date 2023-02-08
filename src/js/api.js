import fetchResource from "./api_wrapper";

function login(email, password) {
  return fetchResource("auth/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
}

function saveDottore(
  codiceFiscale,
  nome,
  cognome,
  dataNascita,
  indirizzo,
  telefono,
  email,
  password,
  sesso,
  specializzazione,
  codiceAlbo,
  nomeStruttura,
  indirizzoStruttura
) {
  return fetchResource("dottore/save", {
    method: "POST",
    body: {
      codiceFiscale,
      nome,
      cognome,
      dataNascita,
      indirizzo,
      telefono,
      email,
      password,
      sesso,
      specializzazione,
      codiceAlbo,
      nomeStruttura,
      indirizzoStruttura,
    },
  });
}

function changePassword(password, newPassword) {
  return fetchResource("auth/changePw", {
    method: "POST",
    body: {
      password,
      newPassword,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getTotpKey(password) {
  return fetchResource("auth/getTotpKey", {
    method: "POST",
    body: {
      password,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getDottore(codiceFiscale) {
  return fetchResource("dottore/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getDottoreByStato(stato) {
  return fetchResource("dottore/getByStato", {
    method: "POST",
    body: {
      stato,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getDottoreByStato(codiceFiscale) {
  return fetchResource("dottore/getByPaziente", {
    method: "POST",
    body: {
      stato,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getAllDottori() {
  return fetchResource("dottore/getAll", {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function dottoreUpdateStato(codiceFiscale, stato) {
  return fetchResource("dottore/updateStato", {
    method: "POST",
    body: {
      codiceFiscale,
      stato,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function savePaziente(
  codiceFiscale,
  nome,
  cognome,
  dataNascita,
  indirizzo,
  telefono,
  email,
  sesso,
  tipoDiabete,
  comorbilita,
  farmaciAssunti,
  periodoDiMonitoraggio,
  numeriUtili,
  terapia
) {
  return fetchResource("paziente/save", {
    method: "POST",
    body: {
      codiceFiscale,
      nome,
      cognome,
      dataNascita,
      indirizzo,
      telefono,
      email,
      sesso,
      tipoDiabete,
      comorbilita,
      farmaciAssunti,
      periodoDiMonitoraggio,
      numeriUtili,
      terapia,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getPaziente(codiceFiscale) {
  return fetchResource("paziente/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getPazienteByDottore(codiceFiscale) {
  return fetchResource("paziente/getByDottore", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function findPaziente(query) {
  return fetchResource("paziente/find", {
    method: "POST",
    body: {
      query,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function findFarmaco(query) {
  return fetchResource("farmaco/find", {
    method: "POST",
    body: {
      query,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getFarmaco(id) {
  return fetchResource("farmaco/get", {
    method: "POST",
    body: {
      id,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getAssunzioneFarmaco(id) {
  return fetchResource("farmaco/get", {
    method: "POST",
    body: {
      id,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getAssunzioneFarmacoByTerapia(id) {
  return fetchResource("farmaco/getByTerapia", {
    method: "POST",
    body: {
      id,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getAssunzioneFarmacoByPaziente(codiceFiscale) {
  return fetchResource("farmaco/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getLastGlicemia(idPaziente) {
  return fetchResource("glicemia/getLast", {
    method: "POST",
    body: {
      idPaziente,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getRangeGlicemia(idPaziente, start, end) {
  return fetchResource("glicemia/getRange", {
    method: "POST",
    body: {
      idPaziente,
      start,
      end,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getFeedBack(id) {
  return fetchResource("feedback/get", {
    method: "POST",
    body: {
      id,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getFeedBackByPaziente(codiceFiscale) {
  return fetchResource("feedback/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getFeedBackByDottore(codiceFiscale) {
  return fetchResource("feedback/getByDottore", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function saveTutore(
  codiceFiscale,
  nome,
  cognome,
  dataNascita,
  indirizzo,
  telefono,
  email,
  sesso,
  relazioneDiParentela,
  pazienteList
) {
  return fetchResource("tutore/save", {
    method: "POST",
    body: {
      codiceFiscale,
      nome,
      cognome,
      dataNascita,
      indirizzo,
      telefono,
      email,
      sesso,
      relazioneDiParentela,
      pazienteList,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getTutore(codiceFiscale) {
  return fetchResource("tutore/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getTutoreByPaziente(codiceFiscale) {
  return fetchResource("tutore/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function sendNotifica(
  id,
  messaggio,
  data,
  ora,
  stato,
  pazienteOggetto,
  pazienteDestinatario,
  tutoreDestinatario,
  adminDestinatario,
  dottoreDestinatario
) {
  return fetchResource("notifica/send", {
    method: "POST",
    body: {
      id,
      messaggio,
      data,
      ora,
      stato,
      pazienteOggetto,
      pazienteDestinatario,
      tutoreDestinatario,
      adminDestinatario,
      dottoreDestinatario,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

function getNotifiche() {
  return fetchResource("notifica/send", {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}
