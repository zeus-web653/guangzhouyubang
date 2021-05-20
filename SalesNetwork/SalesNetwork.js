$(function () {
  // console.log($(window).width())
  $(".sales_network_tab .centernt").css("width", "1240");
  $(window).resize(function () {
    if ($(window).width() < 1240) {
      $(".sales_network_tab .centernt").css({
        width: `${$(this).width()}`,
      });
    } else {
      $(".sales_network_tab .centernt").css("width", "1240");
    }
  });
  $(".sales_network_tab").hide();
  $(".addressNetwork .name")
    .click(function () {
      $(".salesNetwork").hide();
      $(".sales_network_tab").show();
      $(".tabs-l li")
        .eq($(this).index() - 1)
        .addClass("active")
        .trigger('click')
        .siblings()
        .removeClass("active")
    });
    
    $(" .McSalesTit").click(function () {
      $('.tabs ul').animate({
        'width':'toggle',
        'height':'toggle',
        'opacity':'toggle',
        'overflow':'hidden'
      },1000)
    });
    $(window).resize(function () {
      if($(window).width() < 1200){
        $('.tabs ul').hide();
        $('.tabs ul li').click(function () {
          $('.tabs ul').hide();
        })
      }else{
        $('.tabs ul').show();
      }
    })


    
});
