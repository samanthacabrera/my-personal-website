const btn = document.createElement("button");
document.querySelector("body").appendChild(btn);
btn.innerText = "Get in contact";


btn.addEventListener("mouseover", mouseOver);
function mouseOver() {
  btn.style.color = "red";
}

btn.addEventListener("mouseout", mouseOut);
function mouseOut() {
  btn.style.color = "purple";
}


