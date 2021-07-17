const code = document.querySelectorAll("code")
for(let i=0; i<code.length; i++){
    new TypeIt(code[i], {
        speed: 50,
        loop: false,
        startDelay: 50
    }).go();    
}



