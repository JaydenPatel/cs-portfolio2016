// JavaScript File
var titleHTML = document.getElementById("titleHTML");
var titleJS = document.getElementById("titleJavascript");
var jsDiv = document.getElementById("jsDiv");
var spans = document.getElementById("spans");

var wholeThing = document.getElementById("wholeThing");
var eoc = document.getElementById("eoc");

var text = document.getElementById("text");
var photo = document.getElementById("photo");

titleHTML.addEventListener("click", htmlClass);
titleJS.addEventListener("click", jsClass);



wholeThing.addEventListener("click", wholeThingInfo);

eoc.addEventListener("click", eocInfo);



function htmlClass() {
    titleHTML.className = "blue";
    wholeThing.className = "show";
    if (jsDiv.className == "show") {
        jsDiv.className = "JavaScript";
        titleJS.className = "black";

    }
}

function jsClass() {
    jsDiv.className = "show";
    titleJS.className = "red";
    spans.className = "show"
    if (wholeThing.className == "show") {
        wholeThing.className = "HTML";
        titleHTML.className = "black";
        wholeThing.className = "wholeThing";

    }
}
/*
text.innerHTML = "";
photo.innerHTML = "<img class='img' src='../Pictures/' />";
*/
function styleReset() {
    wholeThing.style.textDecoration = "none";
    eoc.style.textDecoration = "none";
}

function reset() {
    text.innerHTML = "";
    photo.innerHTML = "";
    styleReset();
}

titleHTML.addEventListener("click", reset);
titleJS.addEventListener("click", reset);

function wholeThingInfo() {
    styleReset();
    text.innerHTML = "The escape game is a combination of jquery, javascript, css, and html. We used the jquery to create the menu activated by hitting escape as well as creating the starting splash page. We used mulitple functions in the JS to create the levels and save function. We are able to save the users progress using a javascript function. But more on that in the other tab. The CSS is used to position and design everything. The HTMl is used to display everything to the user.";
    text.innerHTML += "<img class='img' src='../Pictures/overviewBP.PNG' />";
    wholeThing.style.textDecoration = "underline";
}


function eocInfo() {
    styleReset();
    text.innerHTML = "If the user desides to select load game, this is the code that tells the game how to select the correct level. The first thing it does it check if someone actually has played thee game before. If they haven't then they the starting level is set to one. Otherwise, the starting level is set to the localstorage level. Then, since we only have 3 levels, we see based on the value of the starting level where the user will start. It will check down starting at 3 going to 2. Based on this, it will run the function containing the level." + "<img class='oimg' src='../Pictures/startingFunc.PNG  ' />";
    photo.innerHTML = "";
    eoc.style.textDecoration = "underline";
}
