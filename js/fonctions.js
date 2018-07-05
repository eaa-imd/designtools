// Fonctions utiles:

function arrayKeys(input) {
    var output = new Array();
    var counter = 0;
    for (i in input) {
        output[counter++] = input[i][0];
    } 
    return output; 
}

function arrayValues(input) {
    var output = new Array();
    var counter = 0;
    for (i in input) {
        output[counter++] = input[i][1];
    } 
    return output; 
}

/*
 * Fonction pour mettre dans l'ordre la 2e colonne.
*/

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}



/*
 * Fonction pour arrondir les chiffres.
*/

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}


// Exemple de boucle "for" sur un array à deux dimensions.
// for (var k in dataAge){
//     if (dataAge.hasOwnProperty(k)) {
//          console.log("Key is: " + dataAge[k][0] + ", value is: " + dataAge[k][1]);
//     }
// }

