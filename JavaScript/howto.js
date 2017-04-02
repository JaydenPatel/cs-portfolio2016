// JavaScript File
function htmlFunction() {
    document.getElementById("Html-Span").innerHTML = "This is the first set of pictures you see on the page. To start this, I created a div with the class of h2class. This is so that later on I can change the color of the text and make it aligned to the center. But only for the text inside the div which is just the title. Next I created the title using h2 tags. Then a new div with a class of container-fluid is made. The class name is linked to a system called bootstrap. Bootstrap is a pre made CSS and JavaScript page that people can use for coding. The class name corresponds with the class name on the bootstrap page. This way, I can use less code and have less frustration while coding. Specifically, container-fluid makes all the container inside this change size based on the size of the screen. Next we have a div with a class of row. This is how we start making our containers. For each new set of container, we need a new div named row. First I start with a div with a class of col-md-3. The name means the content inside the div will take up 3 spaces. The way bootstrap made this, each row has 12 spaces. So a 4th of the space is now taken up for this div. Now I add my image with an img tag. First I add a class of img then and id passed on the pic. For my first one I did pro for processor. Then the source comes in with src. Which means source. I finish it off with a h4 tag to create a name for each picture. I repeat this for each picture I want to add. Finally, I add the span. The span will be used later in JavaScript so I add and ID to it. Inside the span, I add text with instructions. Around the Span, I add a div to control the text inside. I repeat all of these steps for each of the 3 sections of picture rows I did. ";
}

function htmloutFunction() {
    document.getElementById("Html-Span").innerHTML = "";
}

function spanFunction() {
    document.getElementById("Span-Span").innerHTML = "This is where the information will be displayed once the image is hovered over. A var means variable. Variables can be anything. I called mine mcspan. mc means main components. The next part of this is document.getElementById(mc) We use document because we are using DOCTYPE HTML. getElementById is how we can pull an image, span, or anything else from the HTML. We are doing that by using the ID. The (mc) is the ID name of the span we are using. Now the JavaScript has been connected to that span and can start to work with it. Spans are used because JavaScript can put text and other stuff into it with ease. I repeat for the rest of the spans";
}

function spanoutFunction() {
    document.getElementById("Span-Span").innerHTML = "";
}

function imgFunction() {
    document.getElementById("Img-Span").innerHTML = "Similar to before, this is how I get an image from the HTML. The var name is set to pro because the ID for the image I want is pro. Pro is an abbreviation for processor. I repeat this step for all 12 pictures. ";
}

function imgoutFunction() {
    document.getElementById("Img-Span").innerHTML = "";
}

function moFunction() {
    document.getElementById("Mo-Span").innerHTML = "Now we are getting into the main JavaScript. This single line of code is what makes each picture work. First we use the var name for the image we pulled. In this case we are using pro. We add an event listener to the var. In this case we are listening for a mouseover. Mouseover means when you hover over something the function will occur changing or doing  something. In this case, we activate the promise function. I create more of these for each picture and name them respectively";
}

function mooutFunction() {
    document.getElementById("Mo-Span").innerHTML = "";
}

function moutFunction() {
    document.getElementById("Mout-Span").innerHTML = "This text is similar to the one we had before with the event listener. The only difference being we are looking for a new event and there is a new function happening. We are now looking for when the mouse leaves the picture. This means once the cursor leaves the picture a function occurs. Specifically mcmouseout. mcmouseout deletes the text that was put in by a picture. For simplicity, I made one function for each span since they all do the same thing and do not need one for each img. I will repeat this for all of the pictures";
}

function moutoutFunction() {
    document.getElementById("Mout-Span").innerHTML = "";
}

function funcFunction() {
    document.getElementById("Func-Span").innerHTML = "This is how the text comes into the span. First we create our function by typing function. Then we create a name. In this case I use promouse to go with the example from before. Inside the function is the main code. First we start with the mcspan I created earlier. To add text into the span, we say mcspan.innerHTML. The innerHTML basically mean inside the html file is where the stuff is going. Next a equals sign and quotes to start adding text. Now only when the mouse hovers over the picture this text will show. It is the only time it is activated. When it is not being hovered over, the text doesn’t appear. I will repeat this step for all the images and put in the text that goes with the respective picture";
}

function funcoutFunction() {
    document.getElementById("Func-Span").innerHTML = "";
}

function foutFunction() {
    document.getElementById("Fout-Span").innerHTML = "This is how  I make the text disappear. As we know, mcmouseout will occur once the mouse leaves the picture. We also know that mcspan is where the text goes for the information. Also we know that innerHTML means inside HTML. The way we make the text disappear is actually quite easy. Where we normally put texts in the quotes, we now just put nothing. I repeat this for each span I have";
}

function foutoutFunction() {
    document.getElementById("Fout-Span").innerHTML = "";
}
