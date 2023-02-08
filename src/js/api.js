import fetchResource from "./api_wrapper";

export function login(email, password) {
  return fetchResource("auth/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
}

export function saveDottore(
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

export function changePassword(password, newPassword) {
  return fetchResource("auth/changePw", {
    method: "POST",
    body: {
      password,
      newPassword,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getTotpKey(password) {
  return fetchResource("auth/getTotpKey", {
    method: "POST",
    body: {
      password,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getDottore(codiceFiscale) {
  return fetchResource("dottore/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getDottoreByStato(stato) {
  return fetchResource("dottore/getByStato", {
    method: "POST",
    body: {
      stato,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getDottoreByPaziente(codiceFiscale) {
  return fetchResource("dottore/getByPaziente", {
    method: "POST",
    body: {
      stato,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getAllDottori() {
  return fetchResource("dottore/getAll", {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function dottoreUpdateStato(codiceFiscale, stato) {
  return fetchResource("dottore/updateStato", {
    method: "POST",
    body: {
      codiceFiscale,
      stato,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function savePaziente(
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

export function getPaziente(codiceFiscale) {
  return fetchResource("paziente/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getPazienteByDottore(codiceFiscale) {
  return fetchResource("paziente/getByDottore", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function findPaziente(query) {
  return fetchResource("paziente/find", {
    method: "POST",
    body: {
      query,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function findFarmaco(query) {
  return fetchResource("farmaco/find", {
    method: "POST",
    body: {
      query,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getFarmaco(id) {
  return fetchResource("farmaco/get", {
    method: "POST",
    body: {
      id,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getAssunzioneFarmaco(id) {
  return fetchResource("farmaco/get", {
    method: "POST",
    body: {
      id,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getAssunzioneFarmacoByTerapia(id) {
  return fetchResource("farmaco/getByTerapia", {
    method: "POST",
    body: {
      id,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getAssunzioneFarmacoByPaziente(codiceFiscale) {
  return fetchResource("farmaco/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getLastGlicemia(idPaziente) {
  return fetchResource("glicemia/getLast", {
    method: "POST",
    body: {
      idPaziente,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getRangeGlicemia(idPaziente, start, end) {
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

export function getFeedBack(id) {
  return fetchResource("feedback/get", {
    method: "POST",
    body: {
      id,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getFeedBackByPaziente(codiceFiscale) {
  return fetchResource("feedback/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getFeedBackByDottore(codiceFiscale) {
  return fetchResource("feedback/getByDottore", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function saveTutore(
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

export function getTutore(codiceFiscale) {
  return fetchResource("tutore/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function getTutoreByPaziente(codiceFiscale) {
  return fetchResource("tutore/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}

export function sendNotifica(
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

export function getNotifiche() {
  return fetchResource("notifica/send", {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
}
