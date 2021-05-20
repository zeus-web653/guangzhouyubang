$.component([
  ["header"],
  ["about"],
  ['NewsCenter'],
  ['productCenter'],
  ["SalesNetwork"],
  ["jobs"],
  ["contactus"],
  ["footer"],
]);
$(function () {
  resize();

  setTimeout(function () {
    $(".layer").addClass("show");
  }, 1000);

  $(".i_box3 a").eq(0).addClass("activepro");
  $(".i_box3 a").click(function () {
    var num = $(this).index();
    var dd = num * 100;
    $(this).addClass("activepro").siblings().removeClass("activepro");
    $(".i_box4_c")
      .stop(false, true)
      .animate({ top: "-" + dd + "%" }, 600);
  });
  $(window).scroll(function () {
    var t = $(document).scrollTop();
    if (t > 50) {
      $(".backToTheTop").show();
      $(".phone_nav").addClass("fixedmenu");
      $(".header").addClass("fixedmenu");
      // $('.header.fixedmenu1').addClass("fixedmenu");
    } else {
      $(".backToTheTop").hide();
      $(".phone_nav").removeClass("fixedmenu");
      $(".header").removeClass("fixedmenu");
      // $('.header.fixedmenu1').removeClass("fixedmenu");
    }
  });
  $(".backToTheTop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      }
    ); //点击回到顶部按钮，缓懂回到顶部,数字越小越快
    return false;
  });
  $(".zxl_box_c li").click(function () {
    $(".zpHtml").fadeIn(1000);
    $("html").addClass("open");
    var sjTitle = $(this).find("a").attr("data-title");
    var sjContent = $(this).find("a").attr("data-content");
    var sjTime = $(this).find("a").attr("data-time");
    var sjUrl = $(this).find("a").attr("data-url");
    $(".zpRight_t span").html(sjTitle);
    $(".zpRight_t font").html(sjTime);
    $(".zpRight_c .zpRight_con").html(sjContent);
    // $(".zpRight_c .zxl_box5 a").attr({ href: sjUrl });
  });
  $(".zpClose,.zpRight_b_a").click(function () {
    $(".zpHtml").fadeOut(1000);
    $("html").removeClass("open");
    $(".zpRight_t span").html("");
    $(".zpRight_t font").html("");
    $(".zpRight_c .zpRight_con").html("");
    // $(".zpRight_c .zxl_box5 a").attr({ href: " " });
  });
  $(".i_ssbn span").click(function () {
    $(this).parent().find(".i_ssbn_div").toggle();
  });

  $("#SalesNetwork").click(function () {
    $(this).parent().height("auto").css({
      'backgroundColor':'#fff',
      'overflow':'initial'
    }).siblings(':not(.y7)').hide();
    
    $("body").css("overflow-y", "scroll").scroll(function (){
      $('#fullpage').css({
        'transform':'none'
      })
    });
    $(".fullnavr").hide();
    $(".header").addClass("fixedmenu1").css({
      'position': "fixed",
      'backgroundImage': "none",
    });
  });



  
  
});
function resize() {
  var bgWidth = document.documentElement.clientWidth;
  var bgHeight = document.documentElement.clientHeight;

  if (bgWidth > 992) {
    $(".i_content_c").css({
      width: bgWidth + "px",
      height: bgHeight + "px",
    });
  } else {
    $(".i_content_c").css({ width: bgWidth + "px", height: "auto" });
  }

  if (bgWidth < 1241) {
    $(".i_con1").css({ width: bgWidth + "px" });
  } else {
    $(".i_con1").css({ width: "1240px" });
  }

  
}

