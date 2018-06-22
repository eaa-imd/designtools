// On définit les choses:

var dataPays = [
  [ 'Belgique', 11  ],
  [ 'France',   38  ],
  [ 'Suisse',   29 ],
  [ 'New Zealand',   1 ],
];

var labelsPays = arrayKeys(dataPays);
var seriesPays = arrayValues(dataPays);

var dataCompany = [
  [ 'Agences de communication', 8  ],
  [ 'Agence de design',   1  ],
  [ 'Agences web',   10 ],
  [ 'Freelance',   31 ],
  [ 'Collectif',   1 ],
  [ 'Consulting Communication',   1 ],
  [ 'Ecoles',   5 ],
  [ 'Indépendant',   3 ],
  [ 'Start-up',   2 ],
  [ 'Studios',   2 ],
];

var labelsCompany = arrayKeys(dataCompany);
var seriesCompany = arrayValues(dataCompany);

var dataAges = [
  [ '19 ou moins', 4  ],
  [ '20 à 29',   19  ],
  [ '30 à 39',   31 ],
  [ '40 à 49',   23 ],
  [ '50 à 59',   1 ],
	[ '60 et plus',   1 ],
];

var labelsAges = arrayKeys(dataAges);
var seriesAges = arrayValues(dataAges);

// avec arrayKeys() on obtient les labels
// avec arrayValues() on obtient les chiffres
