import  {fetchResource} from "./api_wrapper";
document.addEventListener('DOMContentLoaded', () => {
  function savePaziente(
      codiceFiscale,
      nome,
      cognome,
      dataNascita,
      indirizzo,
      telefono,
      email,
      sesso,
      relazioneParentela,
      listaPazienti
  ) {
    return fetchResource("tutore/save", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: {
        codiceFiscale,
        nome,
        cognome,
        dataNascita,
        indirizzo,
        telefono,
        email,
        sesso,
        relazioneParentela,
        listaPazienti
      }
    });
  }


  document.getElementById("crea-button").addEventListener("click", function () {
    const codiceFiscale = document.getElementById("codiceFiscale").value;
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const dataNascita = "01/02/2023"//document.getElementById("dataNascita").value;
    const indirizzo = document.getElementById("indirizzo").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const sesso = document.getElementById("sesso").value;
    const relazioneParentela = "cugino";
    const listaPazienti = {pazienteList: []};
    savePaziente(codiceFiscale, nome, cognome, dataNascita, indirizzo, telefono, email, sesso, relazioneParentela, listaPazienti)
  });
})