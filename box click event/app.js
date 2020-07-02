var btn = document.querySelector(".upbox");

var box = document.querySelector(".box");
var show = false;
btn.addEventListener("click", function() {
    if (show == false) {
        box.style.transform = "scaleY(1)";
        show = true;

        document.querySelector("h2").innerHTML = "Hide the box";
    } else {
        box.style.transform = "scaleY(0)";
        show = false;
        document.querySelector("h2").innerHTML = "Show the box";
    }
})