// navbar thingy
$(document).ready(function () {
  let isSidebarActive=false;

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
      console.log("activated side abr")
    }
  }

  $(".button").on("click tap", function () {
    toggleSidebar();
  });
  $(".sidebar-item").on("click tap", function () {
    toggleSidebar();
  });

});

