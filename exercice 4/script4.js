var btn = document.getElementsByTagName("button")[0];
var mdp = document.getElementById("motdepasse");
var mdpc = document.getElementById("confirmation");

btn.addEventListener("click", function(){
    if ( mdp.value === mdpc.value ) {
        mdp.style.border =" 2px solid green";
        mdpc.style.border ="2px solid green";
    } else {
        mdp.style.border ="2px solid red";
        mdpc.style.border ="2px solid red";
    }
    
})