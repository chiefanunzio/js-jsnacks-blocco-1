

function registro() {//ex2
    
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
    
    var nuovoUtente = { //ex3      //da aggiungere come oggetto nel registro
        'nome': prompt('inserisci il tuo nome'),
        'cognome': prompt('inserisci il tuo cognome'),
        'eta': parseInt(prompt('quanti anni hai?'))
        
    };


    var reg = [studente1, studente2,studente3];
    reg.push(nuovoUtente);
    
    for ( var i = 0;i < reg.length;i++){
        
        var studente = reg[i];
        
        document.getElementById('title2').innerHTML += (studente['nome'])+' '+(studente['cognome']+'<br>')
    }
    
}


//--------------------------------------------------------------------//

function singoloStudente() { //ex1
    var studenti = { //oggetto per uno studente

        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': 20
    };

    for (var key in studenti) {
        
        var studente = studenti[key];
        
        document.getElementById('title').innerHTML += (key + " :" + studente + '<br>');
    }
    
    
}

//---------------------------------------------------------------//
//---------------------------------------------------------------//
function init() {

    singoloStudente();//ex1
    registro();//ex2 + ex3
    
}

init();