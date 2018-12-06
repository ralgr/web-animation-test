$(function() {
  //==[TEST CODE]==
  console.log("On-load script working.");
  //==[GLOBAL VARIABLES]==
  var clicked = true; //used in: HAMBURGER MENU.
  var prevScrollTop = 0; //used in: NAVIGATION BEHAVIOR
  var scrollTop = 0; //used in: NAVIGATION BEHAVIOR

  //==[HAMBURGER MENU]==
  $(".menuGroup").click(function() {
    if (clicked == true) { //Clicking open.
      $("#topLine").attr("y2", "50%"); //Line 12 - 14: Changes menu shape to "x".
      $("#botLine").attr("y2", "0%");
      $("#midLine").toggle();
      $(".menuContainer").css({position: "relative"}); //Maintain position of menu during scroll.
      $(".blackHole").css("display", "block"); //Show menu.
      $(".blackHole").animate({ height: "+=100%"}, 300); //Drop down animation.
      clicked = false; //Set click to false to change outcome on next click.
    } else if (clicked == false) { //Clicking close.
      $("#topLine").attr("y2", "0%"); //Line 20 - 22: Revert to menu.
      $("#botLine").attr("y2", "50%");
      $("#midLine").toggle();
      if (scrollTop > 0) { //Keeps menu in same place after being closed wherever.
        $(".menuContainer").css({position: 'fixed', display: 'block', left: '79%'});
      } else {
        $(".menuContainer").css({position: "relative", left: "0%"});
      }
      $(".blackHole").slideUp(300, menuClose);
      clicked = true;
    }
  });

  //==[NAVIGATION BEHAVIOR]==
  $(window).scroll(function() {
    scrollTop = $(this).scrollTop();
    if (scrollTop > prevScrollTop) {
      //Scrolling down.
      if (scrollTop > 1345) {
        $(".menuContainer").css({position: 'fixed', display: 'block', left: '79%'});
      }
    } else {
      //Scrolling up.
      if (scrollTop <= 10) {
        $(".menuContainer").css({position: 'relative', display: 'block', left: '0%'});
      } else if (scrollTop > 1345) {
        $(".menuContainer").css({position: 'fixed', display: 'block', left: '79%'});
      }
    }
    prevScrollTop = scrollTop;
  });
});

function menuClose() {
  $(".blackHole").css("height", "0%");
  $(".blackHole").css("display", "none");
};
