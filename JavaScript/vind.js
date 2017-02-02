// JavaScript File
console.log("linked");

var backgroundInfo = document.getElementById("backInfo");
var codeTab = document.getElementById("codeTab");
var backgroundInfoRow = document.getElementById("backInfoRow");
var codeTabRow = document.getElementById("codeTabRow");


backgroundInfo.addEventListener("click", backgroundInfoShow);

codeTab.addEventListener("click", codeTabShow);

function backgroundInfoShow() {
    reset();
    backgroundInfoRow.className = "show";
    codeTabRow.className = "hide";
    backgroundInfo.className = "blue";
    infoSpan.innerHTML = "";
    console.log("backgroundInfo");
}

function codeTabShow() {
    reset();
    codeTabRow.className = "show";
    backgroundInfoRow.className = "hide";
    codeTab.className = "red";
    infoSpan.innerHTML = "";
    console.log("codeTab");
}

function reset() {
    codeTab.className = "white";
    backgroundInfo.className = "white";
    console.log("reset");
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
//var infoSpan1 = document.getElementById("infoSpan1");

aiDefine.addEventListener("click", aiDefineInfo);
vindDefine.addEventListener("click", vindDefineInfo);
beginCode.addEventListener("click", beginCodeInfo);
emotion.addEventListener("click", emotionInfo);
task.addEventListener("click", taskInfo);
findingMines.addEventListener("click", findingMinesInfo);
findingTaverns.addEventListener("click", findingTavernsInfo);
attackingPlayers.addEventListener("click", attackingPlayersInfo);

function clear() {
    aiDefine.className = "normal";
    vindDefine.className = "normal";
    beginCode.className = "normal";
    emotion.className = "normal";
    task.className = "normal";
    findingMines.className = "normal";
    findingTaverns.className = "normal";
    attackingPlayers.className = "normal";
    infoSpan.innerHTML = "none";
    console.log("clear");

}

function aiDefineInfo() {
    clear();
    infoSpan.innerHTML = "AI stands for artificial intelligence. It is a program that does not need human interface to run. Another definition for AI is a programme that is designed to think like humans do. That could include emotions (I.E. fear and happiness) or could include acting to a situation like a human would. It can be written in multiple computer science languages. We used JavaScript to make our bot, but you can use many many more. ";
    console.log("aiDefine");
    aiDefine.className = "underline";
}

function vindDefineInfo() {
    clear();
    infoSpan.innerHTML = "Vindinium is an online AI challenge where people can use different computer science language to create bots. People from around the world can run their bot onto an online server and compete for the win. In this game, there are basically 3 things you need to be able to do: attack, heal, and mine. Mines and taverns are scattered across the map. Taverns are what is used to heal and mines are used to get gold. Getting mines are the premise of the game. The more mines, the more gold you get. You even need gold to heal your bot. Going to a tavern costs 2 gold for every drink. Attacking enemy bots are important for one main reason: getting their mines. If you are able to kill another player, you get all of their mines. Likewise, if you die by anything other than an enemy player, then you lose all of the mines and they reset. The game ends when all the turns are up. Each bot has 300 turns. Any action they do, is counted as a turn. At the end of the game, the person with the most gold will win.<br> <img class='vindWhole' src='../Pictures/vindiniumWhole.PNG' />";
    console.log("vindDefine");
    vindDefine.className = "underline";
}

function beginCodeInfo() {
    clear();
    infoSpan.innerHTML = "begin";
    console.log("begin code");
    beginCode.className = "underline";
}

function emotionInfo() {
    clear();
    infoSpan.innerHTML = "emotion";
    console.log("emotion");
    emotion.className = "underline";

}

function taskInfo() {
    clear();
    infoSpan.innerHTML = "task";
    console.log("task define");
    task.className = "underline";

}

function findingMinesInfo() {
    clear();
    infoSpan.innerHTML = "finding Mines";
    console.log("finding mines");
    findingMines.className = "underline";
}

function findingTavernsInfo() {
    clear();
    infoSpan.innerHTML = "finding Taverns";
    console.log("finding taverns");
    findingTaverns.className = "underline";

}

function attackingPlayersInfo() {
    clear();
    infoSpan.innerHTML = "attacking players";
    console.log("attacking players");
    attackingPlayers.className = "underline";
}
