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
//+ "<img class='' src='../Pictures/.png' />" + "<br>" + "<br>" + "<hr>" 
function aiDefineInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "AI stands for artificial intelligence. It is a program that does not need human interface to run. Another definition for AI is a programme that is designed to think like humans do. That could include emotions (I.E. fear and happiness) or could include acting to a situation like a human would. It can be written in multiple computer science languages. We used JavaScript to make our bot, but you can use many many more. ";
    console.log("aiDefine");
    aiDefine.className = "underline";
}

function vindDefineInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "Vindinium is an online AI challenge where people can use different computer science language to create bots. People from around the world can run their bot onto an online server and compete for the win. In this game, there are basically 3 things you need to be able to do: attack, heal, and mine. Mines and taverns are scattered across the map. Taverns are what is used to heal and mines are used to get gold. Getting mines are the premise of the game. The more mines, the more gold you get. You even need gold to heal your bot. Going to a tavern costs 2 gold for every drink. Attacking enemy bots are important for one main reason: getting their mines. If you are able to kill another player, you get all of their mines. Likewise, if you die by anything other than an enemy player, then you lose all of the mines and they reset. The game ends when all the turns are up. Each bot has 300 turns. Any action they do, is counted as a turn. At the end of the game, the person with the most gold will win.<br> <img class='vindWhole' src='../Pictures/vindiniumWhole.PNG' />";
    console.log("vindDefine");
    vindDefine.className = "underline";
}

function beginCodeInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "We start with the basics of vindinium code. The first part of this is the key to get into the server. Each person gets a custom key based on the username that they create. The key is how our bot gets its name when it is entered into the server. Also in that line, it says arena/training. When we actually run our bot, it only says one of those. Arena is the online server while training is against computer-made bots. We use training to see if our code wros and arena to battle everyone else. After that, there is there is the server. We are using our own private server that only has the people in our class. Howeevr, there is the public server vindinium.org where everyone can run their bot." + "<br>" + "<img class='serverIMG' src = '../Pictures/serverIMG.png' />" + "<br>" + "<br>" + "<hr>" + "The next basic of vindinium code is finding the enemy bots. We do this with 5 lines of code. The first one is a variable set to enemyBots = []. The [] means that it is using an array to see all of the enemy bots. We know who is an enemy with the next set of code. The 4 lines are repetitive. They say basically the same thing but each are slightly tweaked. Look at the first one. It says bot.yourBot.id !=1 this part sees if your bot id is not one. The &apos;!=&apos; is what tells to see if it is not that. Then we say enemyBots.push(bot.bot1). This happens if our bot id is not 1 making the other bot an enemy. We push that bot into the array of enemyBots to be used later in the code." + "<img class='botAIMG' src='../Pictures/enemyMines.png' />" + "<br>" + "<br>" + "<hr>" + "The final part of the basics is the enemyMines. This is very important because it will tell our bot how many mines are there and who owns them. Without this, we would be able to get mines that are not owned by anyone else, but we can not take any mines already owned. The first part of this is the variable enemyMines set to an empty array. After, we have 4 lines of similar code. Taking a look at the first one, we see enemyMines.concat(enemyBots[0].mines). We defined enemy bots right before this paragraph. Concat means that we are adding all the enemyBots mines to the array. We use conact instead of push because contact will combined the data with all of the other ones whereas push will keep is separate. bot.freeMines are all the mines that are not owned by an enemy player." + "<br>" + "<img class='minesAIMG' src='../Pictures/enemyMines.png' />";
    console.log("begin code");
    beginCode.className = "underline";
}

function emotionInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "The way my bot works is by using quote on quote emotions. I was able to code in 3 different emotions: scare, greed, and anger. The three emotions are used to determine the talk that I will ongo. Those tasks will be explained in another tab. Fear is the most basic to determine. It is simply 100 - my life. This means, the lower my life is the more afraid my bot is. This will be used in the task decider." + "<br>" + "<img class='emotionWhole' src='../Pictures/emotion.png' />" + "<br>" + "<br>" + "<hr>" + " Next we define anger. Anger was a bit more complicated to determine because it pulled in more variables than scare does. It pulls in the distance between an enemy player and me, the amount of mines they have, my scare divided by 2, and their life. If they have no mines, my anger is flat out 0. " +"<br>" +"<img class='anger' src='../Pictures/anger.png' />" + "<br>" + "<br>" + "<hr>" + "Finally we have greed. Greed is defined by a few less variables than anger. It takes in the distance between me and an enemy, the amount of mines that I have and my scare levels." + "<img class='greed' src='../Pictures/greed.png' />" + "<br>" + "<br>";
    console.log("emotion");
    emotion.className = "underline";

}

function taskInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "task";
    console.log("task define");
    task.className = "underline";

}

function findingMinesInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "finding Mines";
    console.log("finding mines");
    findingMines.className = "underline";
}

function findingTavernsInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "finding Taverns";
    console.log("finding taverns");
    findingTaverns.className = "underline";

}

function attackingPlayersInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "attacking players";
    console.log("attacking players");
    attackingPlayers.className = "underline";
}
