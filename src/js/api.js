import fetchResource from "./api_wrapper";

export const login = (email, password) => {
  return fetchResource("auth/login", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: {
      email,
      password,
    },
  });
};

export const saveDottore = (
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
) => {
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
};

export const changePassword = (password, newPassword) => {
  return fetchResource("auth/changePw", {
    method: "POST",
    body: {
      password,
      newPassword,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getTotpKey = (password) => {
  return fetchResource("auth/getTotpKey", {
    method: "POST",
    body: {
      password,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getDottore = (codiceFiscale) => {
  return fetchResource("dottore/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getDottoreByStato = (stato) => {
  return fetchResource("dottore/getByStato", {
    method: "POST",
    body: {
      stato,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
};

export const getDottoreByPaziente = (codiceFiscale) => {
  return fetchResource("dottore/getByPaziente", {
    method: "POST",
    body: {
      stato,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getAllDottori = () => {
  return fetchResource("dottore/getAll", {
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const dottoreUpdateStato = (codiceFiscale, stato) => {
  return fetchResource("dottore/updateStato", {
    method: "POST",
    body: {
      codiceFiscale,
      stato,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
};

export const savePaziente = (
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
) => {
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
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
};

export const getPaziente = (codiceFiscale) => {
  return fetchResource("paziente/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
};

export const getPazienteByDottore = (codiceFiscale) => {
  return fetchResource("paziente/getByDottore", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
};

export const findPaziente = (query) => {
  return fetchResource("paziente/find", {
    method: "POST",
    body: {
      query,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const findFarmaco = (query) => {
  return fetchResource("farmaco/find", {
    method: "POST",
    body: {
      query,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
};

export const getFarmaco = (id) => {
  return fetchResource("farmaco/get", {
    method: "POST",
    body: {
      id,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
};

export const getAssunzioneFarmaco = (id) => {
  return fetchResource("farmaco/get", {
    method: "POST",
    body: {
      id,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getAssunzioneFarmacoByTerapia = (id) => {
  return fetchResource("farmaco/getByTerapia", {
    method: "POST",
    body: {
      id,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getAssunzioneFarmacoByPaziente = (codiceFiscale) => {
  return fetchResource("assunzioneFarmaco/getByPaziente", {
    method: "POST",
    mode: "cors",
    body: {
      codiceFiscale,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
};

export const getLastGlicemia = (idPaziente) => {
  return fetchResource("glicemia/getLast", {
    method: "POST",
    body: {
      idPaziente,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getRangeGlicemia = (idPaziente, start, end) => {
  return fetchResource("glicemia/getRange", {
    method: "POST",
    body: {
      idPaziente,
      start,
      end,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getFeedBack = (id) => {
  return fetchResource("feedback/get", {
    method: "POST",
    body: {
      id,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getFeedBackByPaziente = (codiceFiscale) => {
  return fetchResource("feedback/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: { Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getFeedBackByDottore = (codiceFiscale) => {
  return fetchResource("feedback/getByDottore", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const saveTutore = (
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
) => {
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
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getTutore = (codiceFiscale) => {
  return fetchResource("tutore/get", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: {Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getTutoreByPaziente = (codiceFiscale) => {
  return fetchResource("tutore/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const sendNotifica = (
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
) => {
  return fetchResource("notifica/send", {
    method: "POST",
    body: {
      messaggio,
      data,
      ora,
      pazienteOggetto,
      pazienteDestinatario
    },
    headers: {Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getNotifiche = () => {
  return fetchResource("notifica/send", {
    headers: {Authorization: "Bearer " + localStorage.getItem("token")},
  });
};

export const getTerapiaByPaziente = (codiceFiscale) => {
  return fetchResource("terapia/getByPaziente", {
    method: "POST",
    body: {
      codiceFiscale,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
}

export const updateTerapia = (idPaziente, farmaci) => {
  return fetchResource("terapia/update", {
    method: "POST",
    body: {
      idPaziente,
      farmaci,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
}

export const pazienteUpdateTutori = (idPaziente, list) => {
  return fetchResource("paziente/updateTutori", {
    method: "POST",
    body: {
      idPaziente,
      list,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
}
