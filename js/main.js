

let min = 0;
let max = 4;
let indexOfNextColor = 0;
let numberOfColors = 4;
let listOfAllColors = ["Green", "Red", "Silver", "Blue","Aquamarine","Azure", "Purple", "Bisque"];

playGame();

function playGame() {
	listOfColorsToDisplay = chooseTheNextColorsToDisplay(indexOfNextColor, numberOfColors,  listOfAllColors);
	gameChosenColor = listOfColorsToDisplay[getARandomNumber(min, max)];
	displayColors(listOfColorsToDisplay, numberOfColors);
	displayQuestion(gameChosenColor);
	doWhenColorIsClicked(listOfColorsToDisplay, numberOfColors, gameChosenColor);
	indexOfNextColor = indexOfNextColor + numberOfColors;
}

$("#findMoreColors").click(function(){
	playGame();
});

function chooseTheNextColorsToDisplay(indexOfNextColor, numberOfColors, listOfAllColors) {
	let chosenColors = [];
	for (let index = 0; index < numberOfColors; index++) {
		chosenColors [index] = listOfAllColors[index + indexOfNextColor];
	}
	return chosenColors;	
}

function displayColors(listOfColors, numberOfColors){
	for (let index = 0; index < numberOfColors; index++) {
		$("#block-" + index).css({
			"background-color": listOfColors[index]
		});
	}
}

function doWhenColorIsClicked(listOfColors, numberOfColors,gameChosenColor ){
	for (let index = 0; index < numberOfColors; index++) {
		$("#block-"+index).click(function(){
			let answer = listOfColors[index];
			checkTheAnswer(gameChosenColor, answer);
		});
	}
}

function displayQuestion(gameChosenColor) {
	$("#theQuestion").html("Which of the above colors is " + gameChosenColor.toLowerCase() + "?");
}

function checkTheAnswer(gameChosenColor, userChosenAnswer){
	if(userChosenAnswer == gameChosenColor) {
		$("#theAnswer").html("Yes! that is " + gameChosenColor.toLowerCase() + ".");
		userFoundTheColor = true;
	} else {
		$("#theAnswer").html("No that is " + userChosenAnswer.toLowerCase() + ".");
	}
}

function getAListOfRandomNumbers(min, max){
	let randoms = [];
	let randomNumbers = [];

	while(randomNumbers.length < max){
		var randomnumber = Math.floor(Math.random()*max) + min;
		if(randomNumbers.indexOf(randomnumber) > -1) continue;
		randomNumbers[randomNumbers.length] = randomnumber;
	}

	return randomNumbers;
}

function getARandomNumber(min, max){
	var randomNumber = Math.floor(Math.random()*max) + min;
	return randomNumber;
}