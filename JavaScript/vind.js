// JavaScript File
console.log("linked");

var backgroundInfo = document.getElementById("backInfo");
var codeTab = document.getElementById("codeTab");
var conclusion = document.getElementById("conclusion");
var backgroundInfoRow = document.getElementById("backInfoRow");
var codeTabRow = document.getElementById("codeTabRow");


backgroundInfo.addEventListener("click", backgroundInfoShow);
conclusion.addEventListener("click" , conclusionInfo)
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

function conclusionInfo(){
    re
    console.log("conclusionInfo");
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
    infoSpan.innerHTML = "<br>" + "The way my bot works is by using quote on quote emotions. I was able to code in 3 different emotions: scare, greed, and anger. The three emotions are used to determine the talk that I will ongo. Those tasks will be explained in another tab. Fear is the most basic to determine. It is simply 100 - my life. This means, the lower my life is the more afraid my bot is. This will be used in the task decider." + "<br>" + "<img class='emotionWhole' src='../Pictures/emotion.png' />" + "<br>" + "<br>" + "<hr>" + " Next we define anger. Anger was a bit more complicated to determine because it pulled in more variables than scare does. It pulls in the distance between an enemy player and me, the amount of mines they have, my scare divided by 2, and their life. If they have no mines, my anger is flat out 0." + "<br>" + "<img class='anger' src='../Pictures/anger.png' />" + "<br>" + "<br>" + "<hr>" + "Finally we have greed. Greed is defined by a few less variables than anger. It takes in the distance between me and an enemy, the amount of mines that I have and my scare levels." + "<img class='greed' src='../Pictures/greed.png' />" + "<br>" + "<br>";
    console.log("emotion");
    emotion.className = "underline";

}

function taskInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "The task decider is quite basic actually. It sees the values of anger, scare, and greed in order to make a decision. The first check is to see whether scare is greater than greed and anger. This will happen when my health is low. Since my scare is greater than my greed and anger, I run the function finds Tavern which will make me go to the tavern to get health. Next check is to see whether anger is greater than greed. I made it where anger was greed because my anger is based more on killing an enemy player for being close then killing them because they have more mines than me. Lastly, if none of checks end up being true, then I go to the mines." + "<br>" + "<br>" + "<img class='taskIMG' src='../Pictures/taskIMG.png' />";
    console.log("task define");
    task.className = "underline";

}

function findingMinesInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "Being able to find the mines requires two different functions. One to actually set the direction to it and one to see where they are on the map. In the task decider, the function findMine is used. This is the one used to set the direction from the current position that my bot it to the closest mine. It does that with the line myDir =  bot.findPath(myPos, closeMine). Before that, we see a variable called closeMine that is set the the function of closestMine." + "<img class='findMineImg' src='../Pictures/findMinesIMG.png' />" + "<br>" + "<br>" + "<hr>" + "The closestMine function consists of 2 major and 2 minor parts. The two major being a for loop and a if statement and the 2 minor being the return function and the variable. Let's talk about the the minor ones first. The variable closestMine is set to enemyMines[0]. Enemy mines was explained in the basic code tab, but basically it gets all the mines of the map and puts it into one array. The next minor thing there is the return function. It sends the data determined by the for loop and the if statement back into the variable to be stored. Now we can talk about the two major functions. The first one is the for loop. For loops are used to repeat a specific block of code a known number of times. In our case, we are using the for loop in order to check the number of enemyMines. This is done with enemyMines.length. We continue to use the for loop to check the distance between a mine and the current position of my bot. The i = 0 is the initial value or the starting point and the i++ means that we are increasing by 1 at a time. Which means that we are checking each mine one at a time. Finally, we have the if statement. The if statement is what really determines the closest mine. Putting what the if statement is doing into words basically says that if the distance between me and this selected mine is greater than this other selected mine and my path is set to said mine, then the closest mine is set to second selected mine. Sounds a bit confusing, but makes sense. In short, it looks at the distance between me and two separate mines and sees which one has a shorter distance. This is done until the closest mine is found. Once it is found, that mine is set the the variable closestMine which will be used the the findMine function." + "<img class='closestMineIMG' src='../Pictures/closestMineImg.png' />";
    console.log("finding mines");
    findingMines.className = "underline";
}

function findingTavernsInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + "The finding taverns function is very similar to the finding mines functions. Like it, there are 2 different functions that are used to plot the direction to the closest tavern. The first function simply sets the direction of the bot to the closet tavern by saying myDir = (bot.findPath(myPos, closestTavern()). As you can see, we are running a function in order to set the path of our bot." + "<img class='findTavern' src='../Pictures/findTavern.png' />" + "<br>" + "<br>" + "<hr>" + "The closestTavern function works by using a for loop in order to go through the number of taverns and along with the if statement will determine the closest tavern. First we start with the for loop. The for loop takes in all of the taverns and will look at each of them one by one. Each tavern will go through the if statement. The if statement compares 2 different taverns to see which one is closer to the bot. Once it finds it, it will set that tavern to the variable closestTavern." + "<img class='closeTavern' src='../Pictures/closestTavern.png   ' />";
    console.log("finding taverns");
    findingTaverns.className = "underline";

}

function attackingPlayersInfo() {
    clear();
    infoSpan.innerHTML = "<br>" + " Just like the mines and the tavern functions, the attacking Player function comes in two different parts. The first being determining the distance between any given player and the bot and the other to determine the path between said bot and my bot. The first function uses a for loop and a if statment to determine the distance. The for loop will select every bot possible. It will select each one at a time. The if statment will see whether the selected bot is closer to my bot than any other bot in the entire map. Once it finds the bot that is the closest, it will set the bot to the variable of closestPlayer. " + "<img class='closePlayer' src='../Pictures/findPlayer.png' />" + "<br>" + "<br>" + "<hr>" + "To set the bot in the direction of that bot, we use the function hunt Player with the variable myDir set to the path between the current position that my bot is in and the current position the enemy/selected bot is in. " + "<img class='attackPlayer' src='../Pictures/huntPlayer.png' />";
    console.log("attacking players");
    attackingPlayers.className = "underline";
}
