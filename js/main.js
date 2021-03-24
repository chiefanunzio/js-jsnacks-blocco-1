// var nome = prompt('inserisci il tuo nome');
// var cognome = prompt('inserisci il tuo cognome');
// var eta = parseInt(prompt('quanti anni hai?'));

// var nuovoUtente = { //da aggiungere come oggetto nel registro
//     'nome': nome,
//     'cognome': cognome,
//     'eta': eta
// }

function registro() {

    var studente1 = {

        'nome': 'Alberto',
        'cognome': 'Sordi',
        'eta': 20
    };

    var studente2 = {

        'nome': 'Massimo',
        'cognome': 'Troisi',
        'eta': 25
    };
    
    var studente3 = {

        'nome': 'Lello',
        'cognome': 'Arena',
        'eta': 22
    };
    
    var reg = [studente1, studente2,studente3];
    
    for ( var i = 0;i < reg.length;i++){
        
        var studente = reg[i];
        console.log((studente['nome']),(studente['cognome']));
        document.getElementById('title2').innerHTML += (studente['nome'])+' '+(studente['cognome']+'<br>')
    }
    




}

function singoloStudente() { //ex1
    var studenti = { //oggetto per uno studente

        'nome': 'mario',
        'cognome': 'rossi',
        'eta': 20
    };

    for (var key in studenti) {

        var studente = studenti[key];

        document.getElementById('title').innerHTML += (key + " :" + studente + '<br>');
    }


}

function init() {

    //singoloStudente();//ex1
    //registro();
}

init();