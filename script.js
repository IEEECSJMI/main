// Typing effect in cards
const code = document.querySelectorAll("code")
for(let i=0; i<code.length; i++){
    new TypeIt(code[i], {
        speed: 50,
        loop: false,
        startDelay: 50
    }).go();    
}

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

function toggleContactUs() {
  if (isContactFormOpen) {
    $("#contact-us form").removeClass("animate__flipInX");
    $("#contact-us form").addClass("animate__flipOutX");
    setTimeout(function () {
      $("#contact-us form").addClass("d-none");
    }, 1000);
    isContactFormOpen = false;
  } else {
    $("#contact-us form").removeClass("animate__flipOutX d-none");
    $("#contact-us form").addClass("animate__flipInX");
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
        setTimeout(()=>{
        $(".toast-card").removeClass("animate__fadeIn animate__fadeOut");
        $(".toast-card").addClass("d-none");
        },1000)

        
      })
      .catch((err) => console.log(err));
  }

  toggleContactUs();

  // toast thingy
}
