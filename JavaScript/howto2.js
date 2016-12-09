// JavaScript File
var titleHTML = document.getElementById("titleHTML");

titleHTML.addEventListener("click", htmlClass)

function htmlClass() {
    var htmlDiv = document.getElementById("htmlDiv")
    htmlDiv.className = "show"
}

var titleJS = document.getElementById("titleJavascript");

titleJS.addEventListener("click", jsClass)

function jsClass() {
    var jsDiv = document.getElementById("jsDiv")
    jsDiv.className = "show"
 
}


