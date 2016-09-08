//Javascript
//Spans 
var mcspan = document.getElementById("mc");
var stospan = document.getElementById("sto");
var perspan = document.getElementById("per");
//IMGS
var pro = document.getElementById("pro");
var mot = document.getElementById("mot");
var ram = document.getElementById("ram");
var gpu = document.getElementById("gpu");

var hdd = document.getElementById("hdd");
var ssd = document.getElementById("ssd");
var hyb = document.getElementById("hyb");
var fus = document.getElementById("fus");

var mon = document.getElementById("mon");
var key = document.getElementById("key");
var mou = document.getElementById("mou");
var mos = document.getElementById("mos");

//Hover attributes
pro.addEventListener("mouseover", promouse);
mot.addEventListener("mouseover", motmouse);
ram.addEventListener("mouseover", rammouse);
gpu.addEventListener("mouseover", gpumouse);

hdd.addEventListener("mouseover", hddmouse);
ssd.addEventListener("mouseover", ssdmouse);
hyb.addEventListener("mouseover", hybmouse);
fus.addEventListener("mouseover", fusmouse);

mon.addEventListener("mouseover", monmouse);
key.addEventListener("mouseover", keymouse);
mou.addEventListener("mouseover", moumouse);
mos.addEventListener("mouseover", mosmouse);

//No Hover attributes

pro.addEventListener("mouseout", mcmouseout);
mot.addEventListener("mouseout", mcmouseout);
ram.addEventListener("mouseout", mcmouseout);
gpu.addEventListener("mouseout", mcmouseout);

hdd.addEventListener("mouseover", stomouseout);
ssd.addEventListener("mouseover", stomouseout);
hyb.addEventListener("mouseover", stomouseout);
fus.addEventListener("mouseover", stomouseout);

mon.addEventListener("mouseover", permouseout);
key.addEventListener("mouseover", permouseout);
mou.addEventListener("mouseover", permouseout);
mos.addEventListener("mouseover", permouseout);


//Functions for Hover
function promouse() {
    mcspan.innerHTML = "The brain of the computer. The CPU stands for Central Processing Unit. It process all the information in the computer. The power is measured in GHz. Which stands for gigahertz. The higher the GHz, the more processing power you have. The amount of processing power you have in a computer determines how many programs can run at once and determines which programs can actually run. For instance, Black ops 3 requires 2.93 GHz of power. So, the processor in the computer must be greater than 2.93. "
}

function motmouse() {
    mcspan.innerHTML = "The motherboard is like the body of the computer. It is what everything connects to. All components of the computer attach to the motherboard then it will send the data wherever it needs to go. A motherboard needs to be built well. If the motherboard is made with poor materials and built poorly, the components can malfunction and destroy themselves or even deteriorate. The CPU goes inside the motherboard along with the RAM and Graphic Card. The HDD attaches to the motherboard through cabling."
}

function rammouse() {
    mcspan.innerHTML = "RAM stands for Random Access Memory. Ram is program controller. All software open at the time goes into the RAM. RAM is measured in GB or Gigabytes. The more GB RAM has, the more programs can be open and be running at once. Usually, it is good to have at least 4GB of RAM, however this can differ based on the useage of the computer and the type of computer. EX. Laptop."
}

function gpumouse() {
    mcspan.innerHTML = "A Graphic card has two main ways in which the power is measured, the GPU and VRAM. GPU stands for Graphic Processing Unit. VRAM stands for Video Random Access Memory. Both the GPU and the VRAM is basically the Graphical version of a CPU and RAM. A graphic card is more used for people interesting in gaming or a multiple monitor setup. If only one monitor is required for basic usage, in-line graphics is used. Meaning the graphic port built into the motherboard. The reason people use a graphics card to game or do multiple monitor is because they require a lot of power. This power is drawn directly from the CPU making it harder to run other things. This is where the Graphic card comes in. It takes the Graphics processing section of the CPU and puts it on the card. This way more power is useable on the CPU."
}

function hddmouse() {
    stospan.innerHTML = "The motherboard is like the body of the computer. It is what everything connects to. All components of the computer attach to the motherboard then it will send the data wherever it needs to go. A motherboard needs to be built well. If the motherboard is made with poor materials and built poorly, the components can malfunction and destroy themselves or even deteriorate. The CPU goes inside the motherboard along with the RAM and Graphic Card. The HDD attaches to the motherboard through cabling."
}

function ssdmouse() {
    stospan.innerHTML = "RAM stands for Random Access Memory. Ram is program controller. All software open at the time goes into the RAM. RAM is measured in GB or Gigabytes. The more GB RAM has, the more programs can be open and be running at once. Usually, it is good to have at least 4GB of RAM, however this can differ based on the useage of the computer and the type of computer. EX. Laptop."
}

function hybmouse() {
    stospan.innerHTML = "A Graphic card has two main ways in which the power is measured, the GPU and VRAM. GPU stands for Graphic Processing Unit. VRAM stands for Video Random Access Memory. Both the GPU and the VRAM is basically the Graphical version of a CPU and RAM. A graphic card is more used for people interesting in gaming or a multiple monitor setup. If only one monitor is required for basic usage, in-line graphics is used. Meaning the graphic port built into the motherboard. The reason people use a graphics card to game or do multiple monitor is because they require a lot of power. This power is drawn directly from the CPU making it harder to run other things. This is where the Graphic card comes in. It takes the Graphics processing section of the CPU and puts it on the card. This way more power is useable on the CPU."
}

function fusmouse() {
    stospan.innerHTML = "The brain of the computer. The CPU stands for Central Processing Unit. It process all the information in the computer. The power is measured in GHz. Which stands for gigahertz. The higher the GHz, the more processing power you have. The amount of processing power you have in a computer determines how many programs can run at once and determines which programs can actually run. For instance, Black ops 3 requires 2.93 GHz of power. So, the processor in the computer must be greater than 2.93. "
}

function monmouse() {
    perspan.innerHTML = "The motherboard is like the body of the computer. It is what everything connects to. All components of the computer attach to the motherboard then it will send the data wherever it needs to go. A motherboard needs to be built well. If the motherboard is made with poor materials and built poorly, the components can malfunction and destroy themselves or even deteriorate. The CPU goes inside the motherboard along with the RAM and Graphic Card. The HDD attaches to the motherboard through cabling."
}

function keymouse() {
    perspan.innerHTML = "RAM stands for Random Access Memory. Ram is program controller. All software open at the time goes into the RAM. RAM is measured in GB or Gigabytes. The more GB RAM has, the more programs can be open and be running at once. Usually, it is good to have at least 4GB of RAM, however this can differ based on the useage of the computer and the type of computer. EX. Laptop."
}

function moumouse() {
    perspan.innerHTML = "A Graphic card has two main ways in which the power is measured, the GPU and VRAM. GPU stands for Graphic Processing Unit. VRAM stands for Video Random Access Memory. Both the GPU and the VRAM is basically the Graphical version of a CPU and RAM. A graphic card is more used for people interesting in gaming or a multiple monitor setup. If only one monitor is required for basic usage, in-line graphics is used. Meaning the graphic port built into the motherboard. The reason people use a graphics card to game or do multiple monitor is because they require a lot of power. This power is drawn directly from the CPU making it harder to run other things. This is where the Graphic card comes in. It takes the Graphics processing section of the CPU and puts it on the card. This way more power is useable on the CPU."
}

function mosmouse() {
    perspan.innerHTML = "The brain of the computer. The CPU stands for Central Processing Unit. It process all the information in the computer. The power is measured in GHz. Which stands for gigahertz. The higher the GHz, the more processing power you have. The amount of processing power you have in a computer determines how many programs can run at once and determines which programs can actually run. For instance, Black ops 3 requires 2.93 GHz of power. So, the processor in the computer must be greater than 2.93. "
}

//Functions for Mouseout
function mcmouseout() {
    mcspan.innerHTML = ""
}

function stomouseout() {
    stospan.innerHTML = ""
}

function permouseout() {
    perspan.innerHTML = ""
}
