//-------------------------------------------------------------
//	Global variables
//-------------------------------------------------------------
// import inquirer npm
//-------------------------------------------------------------
var inquirer = require("inquirer");

// import constructor function
var Letter = require('./letters.js');
var Word = require('./words.js');

// use function from Word
var randomWord = new Word();
var target =randomWord.getRandomWord(); 
var numBlanks = target.length;
var numGuess = 10;
console.log('target: ',target); 

// use function from Letter
var MyLetter = new Letter();
MyLetter.printRandomWord(target); 
var underscoreWord = []; 
underscoreWord = MyLetter.printUnderscoreWord(); 

//-------------------------------------------------------------
//	Function CheckLetter
//-------------------------------------------------------------
function checkLetter(letter) {
	
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (target[i] == letter) {
			isLetterInWord = true;
		} 
	}// end of for loop

	if (isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (target[i] == letter) {
				underscoreWord[i] = letter;
			}
		}

		console.log(underscoreWord.join(" "));
		console.log('CORRECT!');
			
	} // end if

	else  {
		numGuess--;
		console.log(underscoreWord.join(" "));
		console.log('WRONG!');
		console.log(numGuess + ' guesses left!');
	} // end else
	
} 

//-------------------------------------------------------------
//	Function CheckStatus
//-------------------------------------------------------------
function checkStatus() {
	if (underscoreWord.toString() == randomWordArr.toString()) {
		console.log('\nYOU WON!');
		endGame();
	}
	else if (numGuess == 0) {
		console.log('\nYOU LOST!');
		endGame();
	}
}

//-------------------------------------------------------------
//	Function PromptUser
//-------------------------------------------------------------
function promptUser() {
	inquirer.prompt([
	    {
		    type: "input",
		    name: "input",
		    message: "Guess a letter! "
	  	}
		]).then(function(user) {
		checkLetter(user.input);
		promptUser();
		checkStatus();
	});

}

//-------------------------------------------------------------
//	Function EndGame
//-------------------------------------------------------------
function endGame() {
	inquirer.prompt([
	{
	    type: "list",
	    name: "end",
	    message: "Play again?",
	    choices: ["YES", "NO"]
  	}
	]).then(function(answer){
		if (answer.end.toUpperCase() == "NO") {
			console.log('Bye!');
			process.exit();
		}
		if (answer.end.toUpperCase() == "YES") {
			numGuess = 10;
			promptUser();
		}
	})
}

//-------------------------------------------------------------
//	Main function
//-------------------------------------------------------------

promptUser();


		
	




		






