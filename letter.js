

const anonymousArray = []

const Lett = function (letter) {

  this.letter = letter;
  this.isGuessed = false;
  this.printLetter = function () {
    
    if (this.letter === " ") {
      anonymousArray.push(" ")
     
    } 
    else  {
      anonymousArray.push("_")
    }
  }
}





module.exports = {
  Lett: Lett,
  anonymousArray: anonymousArray

}