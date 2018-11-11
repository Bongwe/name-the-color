

startGame();

function startGame(){
	
	let min = 0;
	let max = 8;
	let numberOfQuestions = 4;
	let indexToStartSelecting = 0;
	
	let questionCount = 0;
	let listOfColors = ["Green", "Red", "Yellow", "Blue","Aquamarine","Azure", "Beige,", "Bisque"];
	let gameChosenColorIndexes = getAListOfRandomNumbers(indexToStartSelecting, indexToStartSelecting + numberOfQuestions)	
	let listOfSelectedColors = chooseTheNextColorsToDisplay(indexToStartSelecting, listOfColors);
	let gameChosenColor = listOfColors[gameChosenColorIndexes];
	
	displayColors(listOfSelectedColors);
	
	$("#findMoreColors").click(function() {
		indexToStartSelecting = indexToStartSelecting + 4;
		listOfSelectedColors = chooseTheNextColorsToDisplay(indexToStartSelecting, listOfColors);
		displayColors(listOfSelectedColors);
	});

	//this checks if the colors were clicked
	for (let index = 0; index < 4; index++) {
		$("#block-"+index).click(function(){
			let answer = listOfSelectedColors[index];
			checkTheAnswer(gameChosenColor, answer);
		});
	}

	$("#theQuestion").html("Which of the above colours is: " + gameChosenColor + "?")
}

function displayColors(listOfSelectedColors){
	for (let index = 0; index < 4; index++) {
		$("#block-" + index).css({
			"background-color": listOfSelectedColors[index]
		});
	}
}

function checkTheAnswer(gameChosenColor, userChosenAnswer){
	if(userChosenAnswer == gameChosenColor) {
		$("#theAnswer").html("Yes! that is correct!");
		userFoundTheColor = true;
	} else {
		$("#theAnswer").html("No, unfortunately you are wrong.");
	}
}

function getAListOfRandomNumbers(min, max){
	//Return a random number between min and max:
	let randoms = [];
	let randomNumbers = [];

	while(randomNumbers.length < max){
		var randomnumber = Math.floor(Math.random()*max) + min;
		if(randomNumbers.indexOf(randomnumber) > -1) continue;
		randomNumbers[randomNumbers.length] = randomnumber;
	}

	return randomNumbers;
	//document.write(randomNumberForBlock);
}

function getARandomNumber(){
	let min = 0;
	let max = 4;
	var randomNumber = Math.floor(Math.random()*max) + min;
	return randomNumber;
}

function chooseTheNextColorsToDisplay(indexToStartSelecting, listOfColors){
	let chosenColors = [];
	for (let index = 0; index < 4; index++) {
		chosenColors[index] = listOfColors[indexToStartSelecting + index];
	}
	return chosenColors;
}