// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15 cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine


function lunghezza() {
    var zucchine = [

        zucchina1 = {
            'var': 'zucc1',
            'peso': 20,
            'lung': 10
        },
        zucchina2 = {
            'var': 'zucc2',
            'peso': 15,
            'lung': 15
        },
        zucchina3 = {
            'var': 'zucc3',
            'peso': 15,
            'lung': 15
        },
        zucchina4 = {
            'var': 'zucc4',
            'peso': 15,
            'lung': 19
        }
    ];

    var big = [];
    var small = [];
    for (i = 0; i < zucchine.length; i++) {
        var zucchina = zucchine[i];
        var lunghezza = zucchina['lung'];


        if (lunghezza > 10) {
            big.push(zucchina);

        } else {
            small.push(zucchina);
        }
    }
    console.log(big);
    console.log(small);

}

function peso(zucchina) {
    var somma = 0

    for (i = 0; i < zucchina.length; i++) {

        var zucchina = zucchina[i];
        var somma += zucchina['peso'];

    }

    return somma;
}





// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli
// elementi da uno e dall 'altro
// es. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3].
function arr() {
    
    var lettere = ['a', 'b', 'c'];
    var numeri = [1, 2, 3, ];
    var all = [];
    for (i = 0; i < lettere.length; i++) {
        
        var lett = lettere[i];
        var num = numeri[i];
        
        
        all.push(lett);
        all.push(num);
        
        console.log(somma);
    }
    console.log(all);
    
}

//  arr();
// lunghezza();
// peso();





// Scrivi una funzione che accetti tre argomenti:
//    un array e due numeri("a"
//       più piccolo di "b"
//       e "b"
//       grande al massimo quanto il numero di elementi dell 'array).
//       La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a"
//       e "b"

function splitter(min, max, array) {}

function esArraySplitter() {
   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   var indMin = 3;
   var indMax = 7;
   var splitted = splitter(indMin, indMax, arr);
   // [ 4, 5, 6, 7, 8 ]
}