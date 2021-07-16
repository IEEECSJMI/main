$("#mlTeamBtn").click(function(){
    $("#mlTeam").slideToggle();
});

$("#dsaTeamBtn").click(function(){
    $("#dsaTeam").slideToggle();
});

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