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

var dataAge = [
  [ '19 ou moins', 4  ],
  [ '20 à 29',     7  ],
  [ '30 à 39',     12 ],
  [ '40 à 49',     7  ],
  [ '50 à 59',     1  ],
  [ '60 ou plus',  1  ]
];

var labelsAge = arrayKeys(dataAge);
var seriesAge = arrayValues(dataAge);

// avec arrayKeys() on obtient les labels
// avec arrayValues() on obtient les chiffres
