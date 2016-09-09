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
var spe = document.getElementById("spe");

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
spe.addEventListener("mouseover", spemouse);

//No Hover attributes

pro.addEventListener("mouseout", mcmouseout);
mot.addEventListener("mouseout", mcmouseout);
ram.addEventListener("mouseout", mcmouseout);
gpu.addEventListener("mouseout", mcmouseout);

hdd.addEventListener("mouseout", stomouseout);

ssd.addEventListener("mouseout", stomouseout);
hyb.addEventListener("mouseout", stomouseout);
fus.addEventListener("mouseout", stomouseout);

mon.addEventListener("mouseout", permouseout);
key.addEventListener("mouseout", permouseout);
mou.addEventListener("mouseout", permouseout);
spe.addEventListener("mouseout", permouseout);


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
    stospan.innerHTML = "HDD stands for Hard Disk Drive. A HDD uses multiple or just one disk to store data. The disk are usually reflective and are easily damaged by fingerprints and dust. All hard drives are measured in GB and TB. TB means terrabyte. There are 1000GB in 1 TB. HDDs go up to 10TB. A speed and write data is the slowest in the internal hard drives. The speed of reading a writing is based on the RPM of the Hard Drive. The best ones can go up to 10,000 RPM but most are either 7200RPM vs 5400RPM. HDDs are cheaper than SSD. A 500GB HDD can cost about $43 while a 500GB SSD can cost up to $150."
}

function ssdmouse() {
    stospan.innerHTML = "SSD stands for solid state drive. SSDs uses a different system to store data then a HDD. It uses flash memory. Flash memory is small computer chips that store data. Putting them together can create higher capacity. They can write and read much faster than a HDD. Their capacity isn’t as high. They can go up to 4TB but it cost a lot. Because of the lower capacity, they are used more for a boot up drive. A SSD can boot up in less than 22 seconds while a HDD take more than 40 seconds. "
}

function hybmouse() {
    stospan.innerHTML = "A hybrid drive is the combination of both a SSD and a HDD. Hybrid storage products monitor the data being read from the hard drive, and cache the most frequently accessed bits to the high-speed NAND flash memory. The data stored on the NAND will change over time, but once the most frequently accessed bits of data are stored on the flash memory, they will be served from the flash, resulting in SSD-like performance for your most-used files."
}

function fusmouse() {
    stospan.innerHTML = "A fusion drive is the Apple version of a hybrid drive. It combines a HDD with 1TB or more  with a NAND flash storage SSD (at least 24GB) and presents it as a single Core Storage managed logical volume with the space of both drives combined."
}

function monmouse() {
    perspan.innerHTML = "This is where every visual object goes. All the programs, videos, pictures, documents, etc get displayed here. A monitor take the data sent to it by the computer through either a DVI cord, Analog cord, or a HDMI cable. DVI and Analog are the most common but HDMI is used for higher quality and for audio transmission. "
}

function keymouse() {
    perspan.innerHTML = "A keyboard is used to input data into the computer. It sends commands, characters, and other data to control the computer.The original computers didn’t have a mouse so the keyboard was the onl was to control it. Some computers do not even turn on without a keyboard being detected. Usually it is connected to USB. Some connect to bluetooth or a USB dongle. Older keyboards connected through PS/2."
}

function moumouse() {
    perspan.innerHTML = "A mouse a used to nagivate the computer screen. A normal mouse has 2 main buttons. The left click and the right click. The left click is the main button. It is used to open and close programs and to select everything. The right click brings up a option menu on most things that it is clicked on."
}

function spemouse() {
    perspan.innerHTML = "Other peripherals of a computer are used for many things. There are external storage systems for backing up or adding mreo stroage. Flash drives for easy file sharing. Speakers to listen to audio, CD/DVD drive to watch movies or listen to music and so many more. Each peripheral adds new features to a computer and allows it to do new things."
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
