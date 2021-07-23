// When the page loads, Hide all the div which show the images of the team members
$(".teamMembers").hide();

// Toggle Slide up and down when the team members button is clicked
$("#mlTeamBtn").click(function () {
    $("#mlTeam").slideToggle();
});

$("#dsaTeamBtn").click(function () {
    $("#dsaTeam").slideToggle();
});

$("#webdTeamBtn").click(function () {
    $("#webdTeam").slideToggle();
});

// Tabs
$("#mlTeamTabButton").click();

function openTeam(evt, teamName) {
  console.log(teamName);
    var team = $("#" + teamName);
    $(".tabcontent").removeClass("tab-fadein");
    team.addClass("tab-fadein");
    $(".tablinks").removeClass("active");
    $(evt.target).addClass("active");
}