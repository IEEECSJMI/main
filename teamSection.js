// When the page loads, Hide all the div which show the images of the team members
$(".teamMembers").hide();

// Toggle Slide up and down when the team members button is clicked
$("#mlTeamBtn").click(function () {
    $("#mlTeam").slideToggle();
});

$("#dsaTeamBtn").click(function () {
    $("#dsaTeam").slideToggle();
});

// This part is for the live-typing effect on the terminal of ML team

const mlterminal = document.querySelectorAll(".terminal")
for (let i = 0; i < mlterminal.length; i++) {
    new TypeIt(mlterminal[i], {
        speed: 50,
        loop: false,
        startDelay: 50
    }).go();
}