$(document).ready(function () {
  var scrollTop = $(".show");
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 980) {
      $(scrollTop).addClass("active");
    } else {
      $(scrollTop).removeClass("active");
    }
  });
});
