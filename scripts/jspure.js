$(".rotate").click(function () {
    $(this).toggleClass("down");
})

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("nav").addClass("changeColor");
    }
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("changeColor");
    }
  });
});
