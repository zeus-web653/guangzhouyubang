$(function () {
  $(".tabs-tit ul li:eq(0)").click(function (e) {
    e.preventDefault();
    // $(this).addClass('active').siblings().removeClass('active').parents('.tabs-tit').siblings().hide().siblings('.about-ban').show().siblings('.brief').show();
    tabSiblingsShow($(this), ".brief");
  });
  $(".tabs-tit ul li:eq(1)").click(function (e) {
    e.preventDefault();
    // $(this).addClass('active').siblings().removeClass('active').parents('.tabs-tit').siblings().hide().siblings('.about-ban').show().siblings('.cul-box').show();
    tabSiblingsShow($(this), ".cul-box");
  });
  $(".tabs-tit ul li:eq(2)").click(function (e) {
    e.preventDefault();
    /*$('.about-index').hide();
        $('#cavas').show();
        $('.brief').hide();
        $('.cul-box').hide();
        $(this).addClass('active').siblings().removeClass('active'); */
    // $(this).addClass('active').siblings().removeClass('active').parents('.tabs-tit').siblings().hide().siblings('.about-ban').show().siblings('#cavas').show();
    tabSiblingsShow($(this), "#cavas");
  });
  function tabSiblingsShow(that, dom) {
    that
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parents(".tabs-tit")
      .siblings()
      .hide()
      .siblings(".about-ban")
      .show()
      .siblings(dom)
      .show();
  }

  $(".tabs-tit h2").click(function () {
    $(".tabs-tit ul").animate(
      {
        width: "toggle",
        height: "toggle",
        opacity: "toggle",
      },
      1000
    );
  });
  if ($(window).width() <= 1200) {
    $(".tabs-tit ul li").click(function () {
      $(this).parent().animate(
        {
          width: "toggle",
          height: "toggle",
          opacity: "toggle",
        },
        1000
      );
    });
  }
});
window.onload = function () {
  $(".header").addClass("fixedmenu1");
  console.log($(".header .nav li:eq(2) dl dd"));
  $(".header .nav li:eq(1) dl dd ").click(function () {
    window.location = "./aboutinx.html#tabs-tit";
    $("#tabs-tit ul li")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active")
      .trigger("click");
  });
};
