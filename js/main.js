let listOfColors = [];
let randomNumberForBlock = [];
let gameChosenColor;
let userFoundTheColor = false;
let userAtemptCount;

setupTheGame();

function setupTheGame(userChosenAnswer){
	listOfColors.push("green");
	listOfColors.push("red");
	listOfColors.push("yellow");
	listOfColors.push("blue");
	userAtemptCount = 0;
	makeRandomNumberList();
	gameChosenColor = listOfColors[getARandomNumber()];
	displayColors();
	$("#theQuestion").html("Which of the above colours is: " + gameChosenColor + "?")
}

$('#replay').click(function() {
    location.reload();
});

function displayColors(userChosenAnswer){
	for (let index = 0; index < randomNumberForBlock.length; index++) {
		$("#block-" + index).css({
			"background-color": listOfColors[randomNumberForBlock[index]]
		});
	}
}

for (let index = 0; index < randomNumberForBlock.length; index++) {
	$("#block-"+index).click(function(){
		let answer = listOfColors[randomNumberForBlock[index]];
		checkTheAnswer(answer);
	});
}

function checkTheAnswer(userChosenAnswer){
	if (userFoundTheColor == false) {
		if(userChosenAnswer == gameChosenColor) {
			$("#theAnswer").html("Yes! that is correct!");
			userFoundTheColor = true;
		} else {
			checkNumberOfUserAttemptsAndDisplay();
		}
	}
}

function checkNumberOfUserAttemptsAndDisplay(){
	if (userAtemptCount > 0){
		$("#theAnswer").html( userAtemptCount + " No, unfortunately you are wrong.");
	} else {
		$("#theAnswer").html("No, unfortunately you are wrong.");
	}
	userAtemptCount++;
}

function makeRandomNumberList(){
	//Return a random number between min and max:
	let min = 0;
	let max = 4;
	let randoms = [];

	while(randomNumberForBlock.length < max){
		var randomnumber = Math.floor(Math.random()*max) + min;
		if(randomNumberForBlock.indexOf(randomnumber) > -1) continue;
		randomNumberForBlock[randomNumberForBlock.length] = randomnumber;
	}
	//document.write(randomNumberForBlock);
}

function getARandomNumber(){
	let min = 0;
	let max = 4;
	var randomNumber = Math.floor(Math.random()*max) + min;
	return randomNumber;
}