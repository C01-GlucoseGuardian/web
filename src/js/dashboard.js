
document.addEventListener('DOMContentLoaded', () => {
  function onPazienteBtn() {

    window.location = "../creazioneprofili/newpaziente.html";
  }

  function onTutoreBtn() {

    window.location = "../creazioneprofili/newtutore.html";
  }

  function onListaBtn() {

    window.location = "../dataview/patientslist.html"
  }

  document.getElementById("new-paziente").onclick = onPazienteBtn;
  document.getElementById("new-tutore").onclick = onTutoreBtn;
  document.getElementById("lista-pazienti").onclick = onListaBtn;
})