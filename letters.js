// Letter: Used for each letter in the current word. Each letter object should either 
// display an underlying character, or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. This should contain letter 
// specific logic and data.


var Letter = function() {
	
	this.underscoreWord = [];
	this.randomWordArr = [];
	
	this.printRandomWord = function(word) {

		randomWordArr = word.split("");
		for (var i = 0; i < randomWordArr.length; i++) {
			this.underscoreWord.push(word[i] !== ' ' ? '_' : ' ');
		}
		console.log(this.underscoreWord.join(" "));
	};

	this.printUnderscoreWord = function() {
	
		return this.underscoreWord;
	};

	this.printRandomWordArr = function() {
		return this.randomWordArr;
	};

};

module.exports = Letter;