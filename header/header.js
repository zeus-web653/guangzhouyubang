$(function () {
  $(".nav li").hover(function () {
    $(this).find(".dl").slideToggle("100000");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() === 0) {
      $(".header")
        .css({
          position: "relative",
        })
        .removeClass("fixedmenu");
    } else {
      $(".header")
        .css({
          position: "fixed",
        })
        .removeClass("fixedmenu");
    }
  });

  $(".nav_but_box").click(function () {
    $(".phone_nav").toggleClass("phone_nav_one");
  });
  $(".nav_main li b").click(function () {
    $(this).parent().toggleClass("b_one");
  });
  $(".i_ssbn span").click(function () {
    $(this).next().toggle();
  });
});
