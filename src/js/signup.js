const signup = () => {
    let nome = document.getElementById("nome").value;
    let cognome = nt.getElementById("signupCognome").value;
    let dataNascita = nt.getElementById("signupDataNascita").value;
    let specializzazione = nt.getElementById("specializzazione").value;
    let codiceIscrizioneAlbo = nt.getElementById("signupCodIscAlbo").value;
    let email = nt.getElementById("signupMail").value;
    let telefono = nt.getElementById("signupTelefono").value;
    let citta = nt.getElementById("signupCitta").value;
    let indirizzo = nt.getElementById("signupIndirizzo").value;
    let password = nt.getElementById("signupPassword").value;
    let confermaPassword = nt.getElementById("signupConfirmPassword").value;

    if(nome && cognome && dataNascita && specializzazione && codiceIscrizioneAlbo && email && telefono && citta && indirizzo && password && confermaPassword) {
        if(password !== confermaPassword) {
            alert("Le password non coincidono");
        } else {
            // perform sign up
            // capire che tipo di utente è
        }
    } else {
        alert("completa tutti i campi");
    }
}

document.getElementById("signupBtn").onclick = signup;