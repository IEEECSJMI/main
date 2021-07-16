// When the page loads, Hide all the div which show the images of the team members
$(".teamMembers").hide();

// Toggle Slide up and down when the team members button is clicked
$("#mlTeamBtn").click(function(){
    $("#mlTeam").slideToggle();
});

$("#dsaTeamBtn").click(function(){
    $("#dsaTeam").slideToggle();
});

// This part is for the live-typing effect on the desktop of ML team
// var app = $("#typewriterTarget");
var app = document.getElementById('typewriterTarget');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();