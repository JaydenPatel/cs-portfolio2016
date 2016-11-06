//JavaScript

// Need to add +/-

//Delete single digit (backspace)

//Square Root function 

//Exponents 

// Fixing decimal ✔ Done

var input1;
var input2;
var noOperator = true;
var hasOperator = false;
var operators = document.querySelectorAll("button.operators");
var numbers = document.querySelectorAll("button.numbers");
var display = document.getElementById("screen");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var sqrt = document.getElementById("sqrt");
//var operators = document.getElementById("divide");

// Numbers 1 - 9 functionality 

function assignEventListenerNumber(htmlObj, index) {
    htmlObj.addEventListener("click", function() {
        display.value += index;
        console.log(display.value)
            //alert(numbers)
    });
}

// Operators like multiplication divison, subtraction, addition

function assignEventListenerOperator(htmlObj, index) {
    htmlObj.addEventListener("click", function() {
        display.value += index;
        //alert(operators)
        console.log(index);
    });
}



for (var i = 0; i < operators.length; i++) {
    assignEventListenerOperator(operators[i], operators[i].value);
}
for (var i = 0; i < numbers.length; i++) {
    assignEventListenerNumber(numbers[i], numbers[i].value);
}

if (equal.addEventListener("click", function() {
        //alert("test ")
        display.value = eval(display.value)
    }));


clear.addEventListener("click", function() {
    display.value = ""
        //alert("test")
})

var mean = document.getElementById("mean");
mean.addEventListener("click", function() {
    var ans;
    ans = eval(display.value);
    ans = ans / ((display.value.length / 2) + 0.5);
    display.value = ans

    console.log("it works")
});
