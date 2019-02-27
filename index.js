const Word = require("./word")
const inquirer = require("inquirer");
const Letter = require("./letter");


let guess = "";

function startGame(){
console.log("Hello! Let's play a movie guess game!" + "\n\n" + "here is your movie: ")

let newWordConst = "";
let newWord = "";
}
startGame()

function gameSetup() {
    
    
    let randomWordIndex = Math.floor(Math.random() * Word.wordsArray.length)
    newWord = Word.wordsArray[randomWordIndex]
    Word.playedArray.push(Word.wordsArray[randomWordIndex]);
    Word.wordsArray.splice(randomWordIndex, 1);
    
    
    newWordConst = new Word.Word(newWord)
    
    newWordConst.printString()
    
    
     //returning empty on second play//
     game()
}
gameSetup()


function game() {
    // newWordConst.isOver()
    newWordConst.allTrue()
    if (newWordConst.isOverFlag === true) {
        return playAgain()
    }

    inquirer.prompt([{
        name: "guess",
        message: "Guess a letter"
    }]).then(function (response) {
        guess = response.guess
        newWordConst.areWeCorrect(guess);
        game()
    })
}




function playAgain() {
    if (Word.wordsArray.length < 1) {

        console.log("End of Game!"+ "\n")
        newWordConst.printScore()
            inquirer.prompt([
                {
                    name:"allagain",
                    message: "Do you want to restart the game?",
                    type: "confirm"
                }
            ]).then(function(response){
                if(response.allagain == true){
                    Word.wordsArray = ["blade runner", "the matrix", "inception", "ex machina", "children of men", "the terminator", "avatar", "looper", "the martian", "jurassic park"];
                    Word.playedArray.length = 0;
                    Word.score = 0;
                    newWordConst = ""
                    Letter.anonymousArray.length = 0 ;
                    guess = "";
                    startGame()
                    gameSetup()
                }
                else{
                    console.log("Have a great day, goodbye!");
                }
            })
    } else {
        inquirer.prompt([
            {
            name: "playAgain",
            message: "Do you want to play again?",
            type: "confirm"
            }
    ]).then(function (response) {
            if (response.playAgain == true) {
                newWordConst = ""
                Letter.anonymousArray.length = 0 ;
                guess = "";
                gameSetup()
               
            } else {
                console.log("Ok thanks goodbye!" + "\n")
                newWordConst.printScore()
            }
        })

    }
}