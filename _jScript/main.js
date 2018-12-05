$(function() {
  //==[TEST CODE]==
  console.log("On-load script working.");
  //==[GLOBAL VARIABLES]==
  var clicked = true; //used in: HAMBURGER MENU.
  var prevScrollTop = 0; //used in: NAVIGATION BEHAVIOR
  var scrollTop = 0; //used in: NAVIGATION BEHAVIOR

  //==[HAMBURGER MENU]==
  $(".menuGroup").click(function() {
    if (clicked == true) {
      $("#topLine").attr("y2", "50%");
      $("#botLine").attr("y2", "0%");
      $("#midLine").toggle();
      $(".menuContainer").css({position: "fixed", left: "63%"});
      $(".blackHole").css("display", "block");
      $(".blackHole").animate({ height: "+=100%"}, 400);
      clicked = false;
    } else if (clicked == false) {
      $("#topLine").attr("y2", "0%");
      $("#botLine").attr("y2", "50%");
      $("#midLine").toggle();
      if (scrollTop > 240) {
        $(".menuContainer").css({position: 'fixed', display: 'block', left: '63%'});
      } else {
        $(".menuContainer").css({position: "relative", left: "0%"});
      }
      $(".blackHole").slideUp(400, menuClose);
      clicked = true;
    }
  });

  //==[NAVIGATION BEHAVIOR]==
  $(window).scroll(function() {
    scrollTop = $(this).scrollTop();
    if (scrollTop > prevScrollTop) {
      //Scrolling down.
      if (scrollTop > 240) {
        $(".menuContainer").css({position: 'fixed', display: 'block', left: '63%', animation: 'fadeIn 0.5s Linear 1'});
      }
    } else {
      //Scrolling up.
      if (scrollTop <= 10) {
        $(".menuContainer").css({position: 'relative', display: 'block', left: '0%', animation: ''});
      } else {
        $(".menuContainer").css({position: 'fixed', display: 'block', left: '63%'});
      }
    }
    prevScrollTop = scrollTop;
  });
});

function menuClose() {
  $(".blackHole").css("height", "0%");
  $(".blackHole").css("display", "none");
};
