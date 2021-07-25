/////////////////////// TEAM MEMBER IMAGES /////////////////////
$("#mlTeam").hide();
$("#dsaTeam").hide();
$("#webdTeam").hide();

var visible= false;// for triggering the fadeIn() effect only once

$(window).scroll(function() {
  var hT = $('#memberImgBottom').offset().top,
      hH = $('#memberImgBottom').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH) && !visible){
    $("#mlTeam").fadeIn();
    visible = true;
  }
});

//////////////////////////// TABS ////////////////////////////

// Show the default tab on load
$("#mlTeamButton").click();

// Function for setting the events on tab button click
function openTeam(evt, teamName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  console.log(teamName);
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  $(".tabcontent").css({display : "none"});

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  $(".tablinks").removeClass("active");

  // Show the current tab, and add an "active" class to the button that opened the tab
  
  document.getElementById(teamName).style.display = "block";

  let teamtab = teamName.replace("Container","");

  $("#" + teamtab + "Button").addClass("active");

  
  // FadeIn the current tab's team members
  if(teamName == "mlTeamContainer" && visible) {
    $("#mlTeam").fadeIn();
    $("#dsaTeam").fadeOut();
    $("#webdTeam").fadeOut();
  } else if(teamName == "dsaTeamContainer") {
    $("#mlTeam").fadeOut();
    $("#dsaTeam").fadeIn();
    $("#webdTeam").fadeOut();
  } else if(teamName == "webdTeamContainer") {
    $("#mlTeam").fadeOut();
    $("#dsaTeam").fadeOut();
    $("#webdTeam").fadeIn();
  } 

}

// /////////////////////////////////////////////////////////////
// ALIGNING TEAMS SECTION
////////////////// /////////////////////////////////////////////
