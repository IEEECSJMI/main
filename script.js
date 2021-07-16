// navbar thingy
$(document).ready(function () {
  let isSidebarActive = false;

  function toggleSidebar() {
    isSidebarActive = $(".nav-right .button").hasClass("active");
    console.log(isSidebarActive);
    if (isSidebarActive) {
      $(".button").removeClass("active");
      $(".sidebar").removeClass("animate__slideInRight hidden-xs");
      $(".sidebar").addClass("animate__slideOutRight");
      $(".sidebar-item").removeClass("active");

    } else {
      $(".button").addClass("active");
      $(".sidebar").removeClass("animate__slideOutRight hidden-xs");
      $(".sidebar").addClass("animate__slideInRight");
      $(".sidebar-item").addClass("active");

    }
  }

  $(".button").on("click tap", function () {
    toggleSidebar();
  });
  $(".sidebar-item").on("click tap", function () {
    toggleSidebar();
  });

});



/************* CAROUSEL THINGY *************/

$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  stagePadding: 10,
  autoplay: true,
  autoplayTimeout: 4000, //2s
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
  smartSpeed: 700,
  responsiveRefreshRate: 50
  // fluidSpeed: 700
});

/************* CAROUSEL THINGY *************/