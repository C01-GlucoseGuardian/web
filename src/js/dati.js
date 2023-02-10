window.approva = function(id){
  getDottoreByStato(0)
  .then(listDottori => {
    let dottore = listDottori.list[id];
    let codiceFiscale = dottore.codiceFiscale;
    dottoreUpdateStato(codiceFiscale, 1);
    alert("Dottore con cf: " + codiceFiscale + " stato aggiornato");

  });
};