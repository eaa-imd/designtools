
// Produire le menu

// on définit la liste des projets (dans un Array javascript).
// pour insérer cette liste, il faut un élément parent ayant la classe "auto-menu".

function ProduceMenu() {

  MenuList = [

    [ 'Brainstorming', 'brainstorming' ],
    [ 'Wireframing', 'wireframing' ],
    [ 'Design d’interface', 'design-interface' ],

    [ 'Prototypage', 'prototypage' ],
    [ 'Édition de code', 'edition-code' ],
    [ 'CMS/frameworks', 'cms-frameworks' ],

    [ 'Gestion de version', 'gestion-de-version' ],
    [ 'Systèmes de design', 'systemes-de-design' ],
    [ 'Communication', 'communication' ]

  ];

  var navProjMenu = '';

  navPath = '../';

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

} // end of ProduceMenu()


function makeNextPage() {

  var bodyClass = document.querySelector("body").className;

  // tester si la classe figure dans MenuList

  var menuSimple = arrayValues(MenuList);

  var a = menuSimple.indexOf(bodyClass);
  
  var nextPage = a + 1;

  return nextPage;

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
  <li class="auto-menu">
    <h2>Les outils du design</h2>
    <ul class="menu-tasks">`;

  menuContent += ProduceMenu();

  menuContent += `</ul>

  </li><!-- .auto-menu -->
    
  <li><h2><a class="menu-title" href="/#toolbox">Toolbox</a></h2></li>
  <li><h2><a class="menu-title" href="/#participants">Participants</a></h2></li>
  <li><h2><a class="menu-title" href="/credits/">Credits</a></h2></li>
</ul><!-- .menu -->`;

 menuContainer.innerHTML = menuContent;

 document.getElementById("menu-icon").addEventListener("click", showHideMenu, false);

}

window.addEventListener("load", InsertMenu, false);


function InsertNavNext() {

  var navContainer = document.getElementById("nav-next");

  if (navContainer) {

    var nextPage = makeNextPage();

    if ( nextPage < MenuList.length ) {

      navContent = `
      <nav class="next">
        <h2>Suite: </h2>
        <a href="`+ navPath + MenuList[nextPage][1] +`/index.html">
          <span class="next-title title-style">`+ MenuList[nextPage][0] +`</span>
          <img src="`+ navPath +`images/icones/`+ MenuList[nextPage][1] +`.svg" alt="image">
        </a>
      </nav>
      `;

      navContainer.innerHTML = navContent;

    }
  }
} // fin de InsertNavNext()


window.addEventListener("load", InsertNavNext, false);

function showHideMenu() {

  var menuContainer = document.getElementById("main-nav");

  if ( menuContainer.classList.contains("active") ) {
      menuContainer.classList.remove("active");
      menuContainer.classList.add("not-active");
  } else {
    menuContainer.classList.remove("not-active");
    menuContainer.classList.add("active");
  }

}



