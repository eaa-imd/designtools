// Produire le menu

// on définit la liste des projets (dans un Array javascript).
// pour insérer cette liste, il faut un élément parent ayant la classe "auto-menu".

function ProduceMenu() {

  var MenuList = [

    [ 'Brainstorming', 'brainstorming' ],
    [ 'Wireframing', 'wireframing' ],
    [ 'Design d’interface', 'design-interface' ],

    [ 'Prototypage', 'prototypage' ],
    [ 'Édition de code', 'edition-code' ],
    [ 'CMS/frameworks', 'cms-frameworks' ],

    [ 'Gestion de versions et de fichiers', 'gestion-de-version' ],
    [ 'Systèmes de design', 'systemes-de-design' ],
    [ 'Communication', 'communication' ]

  ];

  var navProjMenu = '';

  var navPath = '../';

  // Corriger le chemin si on est sur la page d'accueil:
  var navTest = document.querySelectorAll("body.home");
  if (navTest.length == 1) {
    navPath = '';
  }


  for (var i = 0; i < MenuList.length; i++) {

    var Projet = MenuList[i];

    navProjMenu +=  '<li><a href="' + navPath +Projet[1]+ '"><img src="'+navPath+'images/icones/' +Projet[1]+ '.svg"/><div>' +Projet[0]+ '</div></a></li>';

  }

  return navProjMenu;

}

function InsertMenu() {

  var menuContainer = document.getElementById("main-nav");

   var menuContent = `<label for="menu-toggle">
  <div class="icon" id="menu-icon">
    <div class="bar one"></div>
    <div class="bar two"></div>
    <div class="bar three"></div>
  </div>
</label>
<input type="checkbox" id="menu-toggle"/>
<ul id="menu" class="menu">
  <li class="auto-menu"><a href="#">tasks</a>
  <ul class="menu-tasks">`;

  menuContent += ProduceMenu();

  menuContent += `</ul>

  </li>
    
  <li><a href="#">toolbax</a></li>
  <li><a href="#">participants</a></li>
</ul>`;


 menuContainer.innerHTML = menuContent;

 document.getElementById("menu-icon").addEventListener("click", showHideMenu, false);

}

window.addEventListener("load", InsertMenu, false);

/* Animation de l'icone 

Code jQuery original:

$(".icon").click(ain);

function ain() {
  if ($(".icon .bar").hasClass("active")) {
    $(".icon .bar").removeClass("active");
    $(".icon .bar").addClass("notActive");
  } else {
    $(".icon .bar").removeClass("notActive");
    $(".icon .bar").addClass("active");
  }
}

*/

function showHideMenu() {

  // ajouter / enlever les classes .active et .notactive

  if ($(".icon .bar").hasClass("active")) {
    $(".icon .bar").removeClass("active");
    $(".icon .bar").addClass("notActive");
  } else {
    $(".icon .bar").removeClass("notActive");
    $(".icon .bar").addClass("active");
  }

}



