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
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(teamName).style.display = "block";
    evt.currentTarget.className += " active";
}