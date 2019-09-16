var a1 = document.getElementsByTagName("a")[0];
var a2 = document.getElementsByTagName("a")[1];
var text = document.getElementById("texte");

a1.addEventListener("click", function(){
    text.style.visibility="visible"
})
a2.addEventListener("click", function(){
    text.style.visibility="hidden"
})