// Produire la liste visuelle

 function legendeAutomatique(data) {

     var legendeContenu = '';

  // Ordonner dataBrain par numéro

  for (var i = 0; i < dataBrain.length; i++) {
  
      var legendeData     = dataBrain[i];
      // var legendeChiffre = seriesBrain[i];

      legendeContenu += '<li>' +legendeData[0]+ ' : ' + legendeData[1] + '</li>';

  }

      var legendeUL = document.createElement("ul");
      legendeUL.className = "liste-legende";
      legendeUL.innerHTML = legendeContenu;
      document.getElementById("legende").appendChild(legendeUL);


  }