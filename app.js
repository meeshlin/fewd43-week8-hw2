$(document).ready(function() {
  new WOW().init();

  $(window).on("scroll", function () {
    var scrollDistance = $(window).scrollTop();
    console.log(scrollDistance);
    if (scrollDistance>50) {
      $("#mainNav")
        .removeClass("affix-top")
        .addClass("affix");
      // $("#mainNav").addClass("affix");
    } else {
      $("#mainNav")
        .remove("affix")
        .addClass("affix-top");
    };
  });

  $(document).on("click", ".page-scroll", function(event) {
    event.preventDefault(); //Prevent the default "flash"
    var target = $(this).attr("href");
    $("body").animate({
      scrollTop:$(target).offset().top
    } ,2000); //Time in milliseconds to make the scroll slower
    $("body").scrollspy({target:"#mainNav"})
  });



});
