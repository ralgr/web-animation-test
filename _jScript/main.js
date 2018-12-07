$(function() {
  //==[TEST CODE]==
  console.log("On-load script working.");
  //==[GLOBAL VARIABLES]==
  var clicked = true; //used in: HAMBURGER MENU.
  var prevScrollTop = 0;
  var currScrollTop = 0;

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

  //==[CONTENT BEHAVIOUR]==
  $("body").scroll(function() {
    currScrollTop = $(this).scrollTop();
    if (currScrollTop > prevScrollTop) {
      if (currScrollTop > 0) {
        $(".row1").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
        $(".section1").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
      if (currScrollTop > 150) {
        $(".row1").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
        $(".row2").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
      if (currScrollTop > 300) {
        $(".row1").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
        $(".row2").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
        $(".row3").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
      if (currScrollTop > 400) {
        $(".section2").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
      if (currScrollTop > 1400) {
        $(".section3").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
      if (currScrollTop > 2650) {
        $(".section4").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
      if (currScrollTop > 3790) {
        $(".section5").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
      if (currScrollTop > 4900) {
        $(".section6").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
      if (currScrollTop > 6000) {
        $(".section7").css({display: 'block', animation: 'fadeIn 0.5s linear 1'});
      }
    }
    prevScrollTop = currScrollTop;
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
