// JavaScript File
var span = document.getElementById("info");
var img1 = document.getElementById("img1");
img1.addEventListener("mouseover", img1function)
img1.addEventListener("mouseout", img1outfunction)

function img1function() {
    span.innerHTML = "  I go to Summit Shasta. Currently, I am in 10th grade. This is my second year going here. For now, my plan is to stay at Shasta, but that might change in the future depening on what course the school is set on."
}

function img1outfunction() {
    span.innerHTML = ""
}
var img2 = document.getElementById("img2");
img2.addEventListener("mouseover", img2function)
img2.addEventListener("mouseout", img2outfunction)

function img2function() {
    span.innerHTML = "I have been all around the world. Out of the country places I have been are India, Mexico, Dubai, Canada, China, England, and Germany." + "\n" + " In the country I have been all over California, New York, Massachusetts, Ohio, Oregan, Washington, Nevada, Arizona, Minnesota, Florida, and Texas"
}

function img2outfunction() {
    span.innerHTML = ""
}
var img3 = document.getElementById("img3");
img3.addEventListener("mouseover", img3function)
img3.addEventListener("mouseout", img3outfunction)

function img3function() {
    span.innerHTML = "One of my favorite movies are Saw. The entire series is very good and is also my favorite movie series. My favorite food is hambugers and bread sticks from olive garden."
}

function img3outfunction() {
    span.innerHTML = ""
}
var img4 = document.getElementById("img4");
img4.addEventListener("mouseover", img4function)
img4.addEventListener("mouseout", img4outfunction)

function img4function() {
    span.innerHTML = "My hobbies include playing video games, hanging out with people, and flying drones. I play on a Xbox one and I mainly play rainbow six siege. I'm currently in a clan and play constantly. The drone is a DJI Phantom 4 and I use it to record videos using the intelligent flight system.    "
}

function img4outfunction() {
    span.innerHTML = ""
}
