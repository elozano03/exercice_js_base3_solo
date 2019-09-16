var text = document.getElementById("texte")
var blue = document.querySelector(".blue")
var green = document.querySelector(".green")
var red = document.querySelector(".red")

blue.addEventListener("click", function(){
    text.style.color = "blue"
});
red.addEventListener("click", function(){
    text.style.color = "red"
});
green.addEventListener("click", function(){
    text.style.color = "green"
});