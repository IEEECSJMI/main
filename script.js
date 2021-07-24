// Typing effect in cards
const code = document.querySelectorAll("code");
for (let i = 0; i < code.length; i++) {
  new TypeIt(code[i], {
    speed: 50,
    loop: false,
    startDelay: 50,
  }).go();
}

// navbar thingy
$(document).ready(function () {
  let isSidebarActive = false;

  function toggleSidebar() {
    isSidebarActive = $(".nav-right .button").hasClass("active");
    // console.log(isSidebarActive);
    if (isSidebarActive) {
      $(".button").removeClass("active");
      $(".sidebar").removeClass("animate__slideInRight hidden-xs");
      $(".sidebar").addClass("animate__slideOutRight");
      $(".sidebar-item").removeClass("active");
      $("#bg-blur").removeClass("animate__fadeIn");
      $("#bg-blur").addClass("animate__fadeOut");
      setTimeout(() => {
        $("#bg-blur").height("0");
        $("#bg-blur").addClass("d-none");
      }, 300);
    } else {
      $(".button").addClass("active");
      $(".sidebar").removeClass("animate__slideOutRight hidden-xs");
      $(".sidebar").addClass("animate__slideInRight");
      $(".sidebar-item").addClass("active");
      $("#bg-blur").height($(document).height());
      $("#bg-blur").removeClass("animate__fadeOut");
      $("#bg-blur").addClass("animate__fadeIn");
      $("#bg-blur").removeClass("d-none");
    }
  }

  $(".nav-right .button").on("click tap", function () {
    toggleSidebar();
  });
  $(".sidebar-item").on("click tap", function () {
    toggleSidebar();
  });
});
// navbar thingy end

/************* CAROUSEL THINGY *************/

$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  stagePadding: 10,
  autoplay: false,
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
  responsiveRefreshRate: 50,
  // fluidSpeed: 700
});

/************* CAROUSEL THINGY END *************/

// Contact us thingy
let isContactFormOpen = false;
$("#contact-us form").hide();

function toggleContactUs(sendingMsg = false) {
  if (isContactFormOpen) {
    $("#contact-us form").removeClass("animate__fadeIn");
    if (sendingMsg) {
      $("#contact-us form").addClass("animate__backOutUp");
    }
    $("#contact-us form").slideToggle();
    isContactFormOpen = false;
  } else {
    $("#contact-us form").removeClass("animate__backOutUp");

    $("#contact-us form").addClass("animate__fadeIn");

    $("#contact-us form").slideToggle();

    isContactFormOpen = true;
  }
}
$("#contact-btn").click(() => {
  toggleContactUs();
});

// send post request through axios
function sendPostContent() {
  let email = $("#contact-email").val();
  let subject = $("#contact-subject").val();
  let content = $("#contact-body").val();
  let data = {
    email: email,
    subject: subject,
    body: content,
  };
  if (content.length > 0) {
    axios
      .post("https://ancient-ravine-25714.herokuapp.com/sendmail", null, {
        params: data,
      })
      .then(() => {
        $(".toast-card").removeClass("d-none");
        $(".toast-card").addClass("animate__fadeIn");
        $(".toast-card").addClass("animate__fadeOut animate__delay-1s");

        setTimeout(() => {
          $(".toast-card").removeClass("animate__fadeIn animate__fadeOut");
          $(".toast-card").addClass("d-none");
        }, 3000);
      })
      .catch((err) => console.log(err));
  }

  toggleContactUs(true);

  // toast thingy
}

// BACK TO TOP
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
