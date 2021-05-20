$.extend({
  component: function (json) {
    
    $.each(json, function (index, item) {
      $("#" + item[0]).load(item[0] + '/' + "index.html", function () {
        if (item[1]) item[1]();
      });
    });
    return this;
  }
});
