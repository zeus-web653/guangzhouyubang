$(function () {
  $(".recrui-tit a").click(function () {
    $(this).addClass("a_activetz").siblings().removeClass("a_activetz");
    if ($(".recrui-tit a:eq(0)").hasClass("a_activetz")) {
      $(".a-careers-c dd").fadeOut();
    } else {
      $(".a-careers-c dd").fadeIn();
    }
  });

  $(".intr-Header").on("click", function () {
    $(this)
      .toggleClass("activeds")
      .next(".intr-cont ")
      .slideToggle(900)
      .parent()
      .siblings()
      .find(".intr-cont")
      .hide()
      .siblings(".intr-Header")
      .removeClass("activeds");
  });
  $(".applyFor a").click(function () {
    $(".talentConcept")
      .hide()
      .siblings(".Recruitment")
      .hide()
      .siblings(".iWantToApply")
      .show();
  });
  $(".iWantToApply a").click(function () {
    ".iWantToApply"
      .hide()
      .siblings(".talentConcept")
      .show()
      .siblings(".Recruitment")
      .show();
  });
  $(" .mc-menu-t").click(function () {
    $('.mc-menu-c').animate({
      'width':'toggle',
      'height':'toggle',
      'opacity':'toggle',
      'overflow':'hidden'
    },1000)
  });
});
