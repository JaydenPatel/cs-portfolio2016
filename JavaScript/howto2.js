// JavaScript File
var titleHTML = document.getElementById("titleHTML");
var htmlDiv = document.getElementById("htmlDiv");
var titleJS = document.getElementById("titleJavascript");
var jsDiv = document.getElementById("jsDiv");

var wholeThing = document.getElementById("wholeThing");
var input = document.getElementById("input");
var numbers = document.getElementById("numbers");
var operators = document.getElementById("operators");
var vari = document.getElementById("var");
var obj = document.getElementById("obj");
var forLoops = document.getElementById("forLoops");
var eoc = document.getElementById("eoc");
var mean = document.getElementById("mean");

var text = document.getElementById("text");
var photo = document.getElementById("photo");

titleHTML.addEventListener("click", htmlClass);
titleJS.addEventListener("click", jsClass);



wholeThing.addEventListener("click", wholeThingInfo);
input.addEventListener("click", inputInfo);
numbers.addEventListener("click", numbersInfo);
operators.addEventListener("click", operatorsInfo);
vari.addEventListener("click", variInfo);
obj.addEventListener("click", objInfo);
forLoops.addEventListener("click", forLoopsInfo);
eoc.addEventListener("click", eocInfo);
mean.addEventListener("click", meanInfo);



function htmlClass() {
    htmlDiv.className = "show";
    titleHTML.className = "blue";
    if (jsDiv.className == "show") {
        jsDiv.className = "JavaScript";
        titleJS.className = "black";

    }
}

function jsClass() {
    jsDiv.className = "show";
    titleJS.className = "red";
    if (htmlDiv.className == "show") {
        htmlDiv.className = "HTML";
        titleHTML.className = "black";

    }
}
/*
text.innerHTML = "";
photo.innerHTML = "<img class='img' src='../Pictures/' />";
*/
function styleReset() {
    wholeThing.style.textDecoration = "none";
    input.style.textDecoration = "none";
    numbers.style.textDecoration = "none";
    operators.style.textDecoration = "none";
    vari.style.textDecoration = "none";
    obj.style.textDecoration = "none";
    forLoops.style.textDecoration = "none";
    eoc.style.textDecoration = "none";
    mean.style.textDecoration = "none";
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
    text.innerHTML = "The calculator is only usable with the HTML. Using a combination of inputs and buttons we are able to create the entire interface portion of the calculator. The other parts of this HTML section will go in-depth on how each of the different sections works and why they are being  used.";
    photo.innerHTML = "<img class='img' src='../Pictures/calcHTML.PNG' />";
    wholeThing.style.textDecoration = "underline";
}

function inputInfo() {
    styleReset();
    text.innerHTML = "This is the input section of the calculator. It using " + "<xmp><input type = 'text' id = 'screen' enabled ></xmp>" + "we can make a place where the answer and the current operation will go. The type is set to text so you can properly type anything into the box. However, this does mean people can use letters which won't work. The id is so that we can connect it to the JavaScript which I will explain later. Then the enabled part is so that people are allowed to type inside. If I switch it so disabled, then you wouldn't be able to type inside the input box.";
    photo.innerHTML = "<img class='img' src='../Pictures/htmlInput.png' />";
    input.style.textDecoration = "underline";
}

function numbersInfo() {
    styleReset();
    text.innerHTML = "Now we get to the part of the HMTL that contains the numbers and basic operators. First, we start with class='row'. This creates a single row across the page and everything inside fills up that row. It is the best way to make everything even in the end. Next, we have Many buttons. Each button has a set value that is sent into the JavaScript to be computed. Then there are two classes: numbers and operators. It is pretty self explanatory what they represent. They are used for certain parts of the JavaScript as well as the CSS where I made them look different from each other";
    photo.innerHTML = "<img class='img' src='../Pictures/calcNumbers.PNG' />";
    numbers.style.textDecoration = "underline";
}

function operatorsInfo() {
    styleReset();
    text.innerHTML = "The final part of the HTML are the operators. These aren't the basic four that we normally use. Those are in the numbers section. These are the bonus ones I have added to bring more functionality to the calculator. In this section, we have the average, exponents, square root, the clear button, pi, open parenthesis, closed parenthesis, and a comma. The average button is not used with the operators class. It is instead given the id of mean so that it can be used in its own function which I will explain later. Exponents and square roots are similar in the way it is used. Since all operators have a value that is taken to solve, exponents and square roots needed a similar value. That brings us to the math part of JavaScript. We used two functions. Math.pow() for exponents and Math.sqrt() for square root. Next is the clear. I will explain how this works in the JavasScript section. Now we can talk about the parenthesis. They are used to close the Math.pow and Math.sqrt functions since when they are clicked, they look like this: Math.pow( and Math.sqrt(. Finally, we have the comma. It is the most out of place. It is used for the exponent function because Math.pow requires it to know what is being raised to the power of what. 2 to the power of 3 would look like Math.pow(2,3). ";
    photo.innerHTML = "<img class='img' src='../Pictures/htmlOperators.png' />";
    operators.style.textDecoration = "underline";
}

function variInfo() {
    styleReset();
    text.innerHTML = "dsfsdfd";
    photo.innerHTML = "<img class='img' src='../Pictures/calcVar.PNG' />";
    vari.style.textDecoration = "underline";
}

function objInfo() {
    styleReset();
    text.innerHTML = "fsdfsdfsd";
    photo.innerHTML = "<img class='img' src='../Pictures/' />";
    obj.style.textDecoration = "underline";
}

function forLoopsInfo() {
    styleReset();
    text.innerHTML = "weerwrrwer";
    photo.innerHTML = "<img class='img' src='../Pictures/' />";
    forLoops.style.textDecoration = "underline";
}

function eocInfo() {
    styleReset();
    text.innerHTML = "vcbcvbcvb";
    photo.innerHTML = "<img class='img' src='../Pictures/' />";
    eoc.style.textDecoration = "underline";
}

function meanInfo() {
    styleReset();
    text.innerHTML = "23232332";
    photo.innerHTML = "<img class='img' src='../Pictures/' />";
    mean.style.textDecoration = "underline";
}
