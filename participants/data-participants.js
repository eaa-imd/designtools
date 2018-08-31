// On définit les choses:

var dataPays = [
  [ 'France',   38  ],
  [ 'Suisse',   29 ],
  [ 'Belgique', 11  ],
  [ 'New Zealand',   1 ],
];

var labelsPays = arrayKeys(dataPays);
var seriesPays = arrayValues(dataPays);

var dataCompany = [
  [ 'Freelance',   31 ],
  [ 'Agence web',   10 ],
  [ 'Agence de com', 8  ],
  [ 'Ecole',   5 ],
  [ 'Indépendant',   3 ],
  [ 'Start-up',   2 ],
  [ 'Studio',   2 ],
  // [ 'Agence de design',   1  ],
  // [ 'Collectif',   1 ],
  // [ 'Consulting Communication',   1 ],
];

var labelsCompany = arrayKeys(dataCompany);
var seriesCompany = arrayValues(dataCompany);

var dataAges = [
  [ '30 à 39',   31 ],
  [ '40 à 49',   23 ],
  [ '20 à 29',   19  ],
  [ '19 ou moins', 4  ],
  [ '50 à 59',   1 ],
	[ '60 et plus',   1 ],
];

var labelsAges = arrayKeys(dataAges);
var seriesAges = arrayValues(dataAges);

// avec arrayKeys() on obtient les labels
// avec arrayValues() on obtient les chiffres
