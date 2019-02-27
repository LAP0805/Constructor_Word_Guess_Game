const Letter = require("./letter");
let counter = 5;
const wordsArray = ["blade runner", "the matrix", "inception", "ex machina", "children of men", "the terminator", "avatar", "looper", "the martian", "jurassic park"]
const playedArray = []

let score = 0;

const Word = function (word) {
    this.word = word;
    this.letterArray = this.word.split("");
    this.counter = 5;
    this.isOverFlag = false;
    this.printString = function () {

        this.letterArray.forEach(function (item) {
            let newLet = new Letter.Lett(item)
            
            newLet.printLetter();

        })
        console.log( "\n" + Letter.anonymousArray.join(" ") + "\n")
    }
    this.areWeCorrect = function (letter) {
        if (this.counter < 1) {
            this.isOverFlag = true;
            console.log("Out of guesses!"+ "\n")
            return console.log("Total score : " + score + "/10 so far")  
            
        }
        if (this.letterArray.indexOf(letter) > -1) {
            for (var i = 0; i < this.letterArray.length; i++) {
                if (letter == this.letterArray[i]) {
                    Letter.anonymousArray.splice(i, 1, letter)
                }
            }
            console.log( "\n" + Letter.anonymousArray.join(" ") + "\n")
        } else {
            console.log("Nope! you have " + this.counter + " guesses left" + "\n")
            this.counter--
            console.log(Letter.anonymousArray.join(" ")+ "\n")
        }
    }
    this.allTrue = function () {
        if (Letter.anonymousArray.indexOf("_") === -1) {
            // anon.anonymousArray = []//weird behavior. Does not clear, and then clears after print function//
            console.log("You won!" + "\n")
            this.isOverFlag = true;
            score ++
            console.log("Total score : " + score + "/10 so far")  
        }
    }
    this.printScore = function(){
        console.log("Total score : " + score + "/10")
        score = 0;
    }
}



module.exports = {
    wordsArray: wordsArray,
    playedArray: playedArray,
    Word: Word,
    counter: counter,
    score :score
    
}