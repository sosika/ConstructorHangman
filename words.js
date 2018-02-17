
// Word: Used to create an object representing the current word the user is attempting to guess. 
// This should contain word specific logic and data.

var Word = function() {
	this.words = ['london', 'bangkok', 'tokyo', 'paris','rome','cape town','oslo'];

	this.getRandomWord = function () {
    	return this.words[Math.floor(Math.random() * this.words.length)];
	};
}

module.exports = Word;