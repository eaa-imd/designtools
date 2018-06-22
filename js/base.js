jQuery( document ).ready( function( $ ) { 

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

});