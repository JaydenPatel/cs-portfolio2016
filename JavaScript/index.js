// JavaScript File
function aboutmeFunction() {
    document.getElementById("About-Span").innerHTML = "This is a webpage all about me. It will tell who I am, what I like, and things I like to do.";
}

function aboutmeoutFunction() {
    document.getElementById("About-Span").innerHTML = "";
}

function aboutclickFunction() {
    var about = document.getElementById("About-Div");
    about.addEventListener("click", function() {
        window.open("aboutme.html");
        window.close("index.html");
    })
}
aboutclickFunction();

function hardwareFunction() {
    document.getElementById("Hardware-Span").innerHTML = "The hardware webpage is all about the internal compnemts of a computer and how they work. It will give an in depth explanation on the usage of it and why we use it. It will also include some external compnents";
}

function hardwareoutFunction() {
    document.getElementById("Hardware-Span").innerHTML = "";
}

function hardwareclickFunction() {
    var about = document.getElementById("Hardware-Div");
    about.addEventListener("click", function() {
        window.open("hardware.html");
        window.close("index.html");
    });
}
hardwareclickFunction();

function htmlFunction() {
    document.getElementById("HTML-Span").innerHTML = "A page describing how I made the Hardware page. It will show the different lines of code that I used to create the different elements needed to create the page you see";
}

function htmloutFunction() {
    document.getElementById("HTML-Span").innerHTML = "";
}

function htmlclickFunction() {
    var about = document.getElementById("HTML-Div");
    about.addEventListener("click", function() {
        window.open("howto.html");
        window.close("index.html");
    });
}
htmlclickFunction();

function calcFunction() {
    document.getElementById("Calc-Span").innerHTML = "This is a calculator I made using Javascript. It uses buttons and an user input box to function";
}

function calcoutFunction() {
    document.getElementById("Calc-Span").innerHTML = "";
}

function calcclickFunction() {
    var about = document.getElementById("Calc-Div");
    about.addEventListener("click", function() {
        window.open("calc.html");
        window.close("index.html");
    })
}
calcclickFunction();

function todoFunction() {
    document.getElementById("Todo-Span").innerHTML = "This is a todo list that uses cache files to save what you added. It is made using mainly Javascript.";
}

function todooutFunction() {
    document.getElementById("Todo-Span").innerHTML = "";
}

function todoclickFunction() {
    var about = document.getElementById("Todo-Div");
    about.addEventListener("click", function() {
        window.open("todo.html");
        window.close("index.html");
    });
}
todoclickFunction();

function howto2Function() {
    document.getElementById("Howto2-Span").innerHTML = "This is the second how to page about code I have written. This one will be about the calculator that I made. It will explain the diffeerent parts of code that I used to make it and how each of those parts work.";
}

function howto2outFunction() {
    document.getElementById("Howto2-Span").innerHTML = "";
}

function howtoclickFunction() {
    var howto = document.getElementById("Howto2-Div");
    howto.addEventListener("click", function() {
        window.open("howto2.html");
        window.close("index.html");
    })
}
howtoclickFunction();

function vindFunc() {
    document.getElementById("Vind-Span").innerHTML = " This website will go over how I was able to make an AI bot for a program called vindinium. It will go over what vindinium is and how my code works.";
}

function vindout() {
    document.getElementById("Vind-Span").innerHTML = "";
}

function vindclick() {
    var vind = document.getElementById("Vind-Div");
    vind.addEventListener("click", function() {
        window.open("vind.html");
        window.close("index.html");
    });
}
vindclick();

function bigoneFunc() {
    document.getElementById("BG-Span").innerHTML = "The big project was a collaboration with Alex to create an escape game with cache files. We are able to save your progress in the game.";
}

function bigoneout() {
    document.getElementById("BG-Span").innerHTML = "";
}

function bigoneClick() {
    var BG = document.getElementById("BG-Div");
    BG.addEventListener("click", function() {
        window.open("BigOne.html");
        window.close("index.html");
    });
}
bigoneClick();

function howto3Func() {
    document.getElementById("howto3-Span").innerHTML = "This how to will show how I was able to create the big project. It will go over the different parts of code I used and show how they created the escape game.";
}

function howto3out() {
    document.getElementById("howto3-Span").innerHTML = "";
}

function howto3click() {
    var ht3 = document.getElementById("howto3-Div");
    ht3.addEventListener("click", function() {
        window.open("howto3.html");
        window.close("index.html");
    });
}
howto3click();

function hornFunction() {

    var horn = "<img class='horn' src='horn.png' />";
    var horn1 = "<img class='horn' src='horn.1.png' />";

    document.getElementById("horn").innerHTML = horn;
    document.getElementById("horn1").innerHTML = horn1;
}

function hornoutFunction() {
    document.getElementById("horn").innerHTML = "";
    document.getElementById("horn1").innerHTML = "";
}
