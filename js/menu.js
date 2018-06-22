// Produire le menu

// on définit la liste des projets (dans un Array javascript).
// pour insérer cette liste, il faut un élément parent ayant la classe "auto-menu".

function ProduceMenu() {

  var MenuList = [

    [ 'Brainstorming', 'brainstorming' ],
    [ 'Wireframing', 'wireframing' ],
    [ 'Design d’interface', 'interface' ],

    [ 'Prototypage', 'prototypage' ],
    [ 'Édition de code', 'edition-code' ],
    [ 'CMS/frameworks', 'cms-frameworks' ],

    [ 'Gestion de versions et de fichiers', 'gestion-de-version' ],
    [ 'Systèmes de design', 'systemes-de-design' ],
    [ 'Communication', 'communication' ]

  ];

  var navProjMenu = '';

  for (var i = 0; i < MenuList.length; i++) {

    var Projet = MenuList[i];

    navProjMenu += '<li><a href="' +Projet[1]+ '">' +Projet[0]+ '</a></li>';

  }

  return navProjMenu;

}

function InsertMenu() {

  var menuContainer = document.getElementsByClassName("auto-menu");

  var menuContent = ProduceMenu();

  for (var i = 0; i < menuContainer.length; i++) {
      
      var pageListUL = document.createElement("ul");
      pageListUL.className = "menu-tasks";
      pageListUL.innerHTML = menuContent;
  
      // on insère les contenus

      menuContainer[i].appendChild(pageListUL);

  }

}

window.addEventListener("load", InsertMenu, false);

