$(function () {
  $.ajax({
    type: "get",
    url: "./NewsCenter/newsCenter.json",
    dataType: "json",
    success: function (res) {
      console.log(res);
      newsData(res);
    },
  });
  function newsData(data) {
    console.log(data.news1);
    var dataone = data.news1;
    var datatwo = data.news2;
    var dataThree = data.news3;
    $.each(dataone, function (item, val) {
      $("#tab-1 ul").append(`
          <li class="fl wow zoomIn animated">
  
          <a href="##" class="a-news">
          <div class='Amplification'><img src="${val.src}" alt=""></div>
              <div class="text">
              <div class="text-div">
              <span>${val.tit}</span>
                  <p>${val.cont}</p>
                  <div class="clearfix"><span class="fl">${val.time}</span><span class="fr">></span></div>
              </div>
              </div>
          </a>
      </li>
          `);
    });
    $.each(datatwo, function (item, val) {
      $("#tab-2 ul").append(`
          <li class="fl wow zoomIn ">
          <a href="##" class="a-news">
              <div class='Amplification'><img src="${val.src}" alt=""></div>
              <div class="text">
              <div class="text-div">
              <span>${val.tit}</span>
                  <p>${val.cont}</p>
                  <div class="clearfix"><span class="fl">${val.time}</span><span class="fr">></span></div>
              </div>
                  
              </div>
          </a>
      </li>
          `);
    });
    $.each(dataThree, function (item, val) {
      $("#tab-3 ul").append(`
          <li class="fl wow zoomIn ">
          <a href="##" class="a-news">
             <div class='Amplification'><img src="${val.src}" alt=""></div>
              <div class="text">
              <div class="text-div">
              <span>${val.tit}</span>
                  <p>${val.cont}</p>
                  <div class="clearfix"><span class="fl">${val.time}</span><span class="fr">></span></div>
              </div>
              </div>
          </a>
      </li>
          `);
    });
  }
  // console.log($(window).width())

  $(" .news-center-tab h2").click(function () {
    toggleTabNews();
  });
  $(".a_tzjyg_c_tb a").addClass("text-ellipsis");
});
function toggleTabNews() {
  $(".news-center-tab ul").animate(
    {
      width: "toggle",
      height: "toggle",
      opacity: "toggle",
    },
    1000
  );
}
window.onload = function () {
  $(".header").addClass("fixedmenu1");
  $(".news-center-tab li").click(function () {
    $(".news-article").addClass("hide");
  });
  $(".news-center-tab li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".news-cont").hide().eq($(this).index()).show();
  });

  if ($(window).innerWidth() < 1200) {
    $(" .news-center-tab li").css({
      color: "#004b98",
      backgroundColor: "#eee",
    });
    $(" .news-center-tab li ").click(function () {
      toggleTabNews();
    });
  }
  $(window).resize(function () {
    if ($(window).innerWidth() > 1199) {
      $(".news-center-tab ul").show();
      $(".news-center-tab li ").click(function () {
        $(".news-center-tab ul").show();
      });
    }
  });
  var $tabLi = document.querySelectorAll(".tab ul li");

  var articleLi = document.querySelectorAll(".article li");
  for (var i = 0; i < $tabLi.length; i++) {
    (function (n) {
      $tabLi[n].onclick = function () {
        var newsArticle = document.querySelector(".news-article");

        $(".news-content #company-news").hide();
        newsArticle.className = "news-article";
        for (var j = 0; j < articleLi.length; j++) {
          articleLi[j].className = " ";
        }
        articleLi[n].className = "article-active";
      };
    })(i);
  }
  $(".a_tzjyg_c_tb a:first-of-type").click(function () {
    $(this)
      .parents("li")
      .removeClass("article-active")
      .prev()
      .addClass("article-active");
  });
  $(".a_tzjyg_c_tb a:last-of-type").click(function () {
    $(this)
      .parents("li")
      .removeClass("article-active")
      .next()
      .addClass("article-active");
  });

  console.log($(".header .nav li:eq(2) dl dd "));
  $(".header .nav li:eq(2) dl dd").click(function () {
    window.location = "./NewsCenterinx.html#news-tabs-tit";
    $('#news-tabs-tit ul li').removeClass('active').eq($(this).index()).addClass('active').trigger('click');
  });
};
