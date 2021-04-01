// Bottone genera
var generateTicketButton = document.getElementById('generate-button');
generateTicketButton.addEventListener('click', function() {


    // Nome passeggero -> leggo l'input nome-utente ------------ ->
    var generatoreNomeUtente = document.getElementById('nome-utente');
    var nomeUtente = generatoreNomeUtente.value;
    console.log(nomeUtente);
    // ------------------------- ->


    // Offerta -> leggo l'input eta-utente, faccio un if -------- ->
    // Se minorenne, maggiorenne o over
    var generatoreEtaUtente = document.getElementById('eta-utente');
    var etaUtente = generatoreEtaUtente.value;
    var scontoUtente = "Prezzo standar";
    if ( etaUtente == "minorenne" ) {
        scontoUtente = "Sconto minorenni";
    } else if ( etaUtente == "over" ) {
        scontoUtente = "Sconto Over 65";
    }
    console.log(scontoUtente);
    // ------------------------- ->


    // Carrozza ---- ->
    var numeroCarrozza = Math.floor(Math.random() * 10) + 1;
    // ------------------------- ->


    // Codice CP ---- ->
    var codiceCp = Math.floor(Math.random() * (99999 - 10000 + 1) );
    // ------------------------- ->


    // Prezzo ------------------- ->
    var prezzoAKm = 0.21;

    var generatoreKmPercorsi = document.getElementById('distance-km');
    var kmPercorsi = generatoreKmPercorsi.value;
    var kmPercorsiInt = parseInt(kmPercorsi);
    console.log(kmPercorsiInt);
    var prezzoBiglietto = kmPercorsiInt * prezzoAKm;
    
    if ( etaUtente == "minorenne" ) {
       prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.2);
    } else if ( etaUtente == "over" ) {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.4);
    }
    console.log(prezzoBiglietto);
    // ------------------------- ->


    // Stampa ------------------- ->
    // Nome Utente
    document.getElementById('nome-cognome').innerHTML = nomeUtente;
    // Offerta
    document.getElementById('offer-type').innerHTML = scontoUtente;
    // Carrozza
    document.getElementById('numero-carrozza').innerHTML = numeroCarrozza;
    // Codice CP
    document.getElementById('codice-cp').innerHTML = codiceCp;
    // Costo Biglietto
    document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);
    // Biglietto stampato
    document.getElementById('biglietto').className = "show";
    // ------------------------- ->
});

// Bottone annulla
var cancelTicketButton = document.getElementById('cancel-button');
cancelTicketButton.addEventListener('click', function() {

    // Generator Result
    document.getElementById('biglietto').className = "hidden";

    // Nome passeggero
    document.getElementById('nome-utente').value = '';
    // Offerta
    document.getElementById('eta-utente').value = 'maggiorenne';
    // Prezzo
    document.getElementById('distance-km').value = '';
});