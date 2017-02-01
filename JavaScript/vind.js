// JavaScript File
console.log("linked");

var backgroundInfo = document.getElementById("backInfo");
var codeTab = document.getElementById("codeTab");
var backgroundInfoRow = document.getElementById("backInfoRow");
var codeTabRow = document.getElementById("codeTabRow");


backgroundInfo.addEventListener("click", backgroundInfoShow);

codeTab.addEventListener("click", codeTabShow);

function backgroundInfoShow() {
    backgroundInfoRow.className = "show";
    codeTabRow.className = "hide";
    infoSpan.innerHTML = "";
    console.log("backgroundInfo");
}

function codeTabShow() {
    codeTabRow.className = "show";
    backgroundInfoRow.className = "hide";
    infoSpan.innerHTML = "";
    console.log("codeTab");
}

var aiDefine = document.getElementById("aiDefine");
var vindDefine = document.getElementById("vindDefine");
var beginCode = document.getElementById("beginCode");
var emotion = document.getElementById("Emotion");
var task = document.getElementById("Task");
var findingMines = document.getElementById("FindingMines");
var findingTaverns = document.getElementById("FindingTaverns");
var attackingPlayers = document.getElementById("AttackingPlayers");
var infoSpan = document.getElementById("infoSpan");
var infoSpan1 = document.getElementById("infoSpan1");

aiDefine.addEventListener("click", aiDefineInfo);
vindDefine.addEventListener("click", vindDefineInfo);
beginCode.addEventListener("click", beginCodeInfo);
emotion.addEventListener("click", emotionInfo);
task.addEventListener("click", taskInfo);
findingMines.addEventListener("click", findingMinesInfo);
findingTaverns.addEventListener("click", findingTavernsInfo);
attackingPlayers.addEventListener("click", attackingPlayersInfo);

function aiDefineInfo() {
    infoSpan.innerHTML = "AI stands for artificial intelligence. It is a program that does not need human interface to run. Another definition for AI is a programme that is designed to think like humans do. That could include emotions (I.E. fear and happiness) or could include acting to a situation like a human would. ";
    console.log("aiDefine");
}

function vindDefineInfo() {
    infoSpan.innerHTML = "vind";
    console.log("vindDefine");
}

function beginCodeInfo() {
    infoSpan.innerHTML = "begin";
    console.log("begin code");
}

function emotionInfo() {
    infoSpan.innerHTML = "emotion";
    console.log("emotion");
}

function taskInfo() {
    infoSpan.innerHTML = "task";
    console.log("task define");
}

function findingMinesInfo() {
    infoSpan.innerHTML = "finding Mines";
    console.log("finding mines");
}

function findingTavernsInfo() {
    infoSpan.innerHTML = "finding Taverns";
    console.log("finding taverns");
}

function attackingPlayersInfo() {
    infoSpan.innerHTML = "attacking players";
    console.log("attacking players");
}
