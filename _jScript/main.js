$(function() {
  //==[TEST CODE]==
  console.log("On-load script working.");
  //==[GLOBAL VARIABLES]==
  var clicked = true; //used in: HAMBURGER MENU.

  //==[HAMBURGER MENU]==
  $(".menuGroup").click(function() {
    if (clicked == true) { //Clicking open.
      clicked = false; //Set click to false to change outcome on next click.
      $("#topLine").attr("y2", "50%"); //Line 12 - 14: Changes menu shape to "x".
      $("#botLine").attr("y2", "0%");
      $("#midLine").toggle();
      $(".blackHole").css("display", "block"); //Show menu.
      setTimeout(showNav, 500);
    } else if (clicked == false) { //Clicking close.
      clicked = true;
      $("#topLine").attr("y2", "0%"); //Line 20 - 22: Revert to menu.
      $("#botLine").attr("y2", "50%");
      $("#midLine").toggle();
      $(".blackHole").fadeOut(300, menuClose);
    }
  });
});

function menuClose() {
  $(".blackHole").css("display", "none");
  $("nav").removeClass("delay");
  $("nav").css({opacity: '0', animation: ''});
}

function showNav() {
  $("nav").css({opacity: '1', animation: 'fadeIn 0.3s linear 1'});
}
