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

  var items = $(".pagination_item");
    var numItems = items.length;
    var perPage = 9;

    items.slice(perPage).hide();

    $('.pagination').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "",
        nextText: "&#8250",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });

    var items = $(".sketches_text");
    var numItems = items.length;
    var perPage = 18;

    items.slice(perPage).hide();

    $('.pagination2').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "",
        nextText: "",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
});
