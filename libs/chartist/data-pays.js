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

// Exemple de boucle "for" sur un array à deux dimensions.
// for (var k in dataAge){
//     if (dataAge.hasOwnProperty(k)) {
//          console.log("Key is: " + dataAge[k][0] + ", value is: " + dataAge[k][1]);
//     }
// }

// On définit les choses:

var dataPays = [
  [ 'Belgique', 6  ],
  [ 'France',   4  ],
  [ 'Suisse',   22 ],
];

var labelsPays = arrayKeys(dataPays);
var seriesPays = arrayValues(dataPays);

// avec arrayKeys() on obtient les labels
// avec arrayValues() on obtient les chiffres
