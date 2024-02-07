const btn = document.getElementById("btn");
    
btn.addEventListener("mouseover", mouseOver);
function mouseOver() {
    btn.style.color = "whitesmoke";
    btn.style.backgroundColor = "rgb(255, 128, 78)";
    btn.style.border = "1px solid whitesmoke";
    btn.style.transition = "1s";
}

btn.addEventListener("mouseout", mouseOut);
function mouseOut() {
    btn.style.color = "rgb(255, 128, 78)";
    btn.style.backgroundColor = "whitesmoke";
    btn.style.border = "none";
     btn.style.transition = "1s";
}


