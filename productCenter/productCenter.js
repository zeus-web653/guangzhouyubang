$(function () {
  $(".sidebar-nav li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".producCenter-r-list > li")
      .removeClass("list-active")
      .eq($(this).index())
      .addClass("list-active");
  });

  $(".tabs > ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".producCenter-r-list li.list-active .tabs > div")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  if ($(window).innerWidth() < 1200) {
    $(".productCenter-l h2").click(function () {
      toggleTab(".productCenter-l .sidebar-nav");
    });
  }
});
function toggleTab(dom) {
  $(dom).animate(
    {
      width: "toggle",
      height: "toggle",
      opacity: "toggle",
    },
    600
  );
}
window.onload = function () {
  $(".header").addClass("fixedmenu1");

   console.log($('.header .nav li:eq(3) dl dd'))
    $('.header .nav li:eq(3) dl dd').click(function () {
        window.location = './productCenterinx.html#productCenter-r'
        $('.sidebar-nav li').removeClass('active').eq($(this).index()).addClass('active').trigger(
            'click');
    })
};
