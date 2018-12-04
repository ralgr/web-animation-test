$(function() {
  console.log("Should work");
  var clicked = true;
  $(".menuGroup").click(function() {
    if (clicked == true) {
      console.log("Menu is clicked open");
      $("#topLine").attr("y2", "50%");
      $("#botLine").attr("y2", "0%");
      $("#midLine").toggle();
      $(".blackHole").css("display", "block");
      $(".blackHole").animate({ height: "+=100%"}, 400);
      clicked = false;
    } else if (clicked == false) {
      console.log("Menu is clicked close");
      $("#topLine").attr("y2", "0%");
      $("#botLine").attr("y2", "50%");
      $("#midLine").toggle();
      $(".blackHole").slideUp(400, menuClose);
      ;
      clicked = true;
    }
  });
});

function menuClose() {
  $(".blackHole").css("height", "0%");
  $(".blackHole").css("display", "none");
};
