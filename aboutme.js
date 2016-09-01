// JavaScript File
var span = document.getElementById("info");
var img1 = document.getElementById("img1");
img1.addEventListener("mouseover", img1function)
img1.addEventListener("mouseout", img1outfunction)

function img1function() {
    span.innerHTML = "pie"
}

function img1outfunction() {
    span.innerHTML = ""
}
var img2 = document.getElementById("img2");
img2.addEventListener("mouseover", img2function)
img2.addEventListener("mouseout", img2outfunction)

function img2function() {
    span.innerHTML = "pie2"
}

function img2outfunction() {
    span.innerHTML = ""
}
var img3 = document.getElementById("img3");
img3.addEventListener("mouseover", img3function)
img3.addEventListener("mouseout", img3outfunction)

function img3function() {
    span.innerHTML = "pie3"
}

function img3outfunction() {
    span.innerHTML = ""
}
var img4 = document.getElementById("img4");
img4.addEventListener("mouseover", img4function)
img4.addEventListener("mouseout", img4outfunction)

function img4function() {
    span.innerHTML = "pie4"
}

function img4outfunction() {
    span.innerHTML = ""
}