var luckyNumber = Math.floor(Math.random()*20)

var userGuess = document.getElementById('guessing')

var chkBtn = document.getElementById("check")

var playAgain = document.getElementById('play-again')

var score = document.getElementById('score')
var finalScore = 10;

var section = document.getElementById('game')

var update = document.getElementById('update')

chkBtn.addEventListener('click',checkYourGuess)

function checkYourGuess(){

    var guessedNumber = parseInt(userGuess.value)

    if(guessedNumber>20 || guessedNumber<1){
        update.innerHTML="Guess 1 to 20"
    }else{
        
        if(finalScore===0){
        update.innerText="you failed to guess"
        section.style.backgroundColor="darkred"
    }else if(guessedNumber===luckyNumber){
        update.innerHTML="You won";
        section.style.backgroundColor="green"
    }else if(guessedNumber>luckyNumber){
        update.innerHTML='Too high'
        finalScore--;
        score.innerHTML=finalScore
    }else if(guessedNumber<luckyNumber){
        update.innerHTML='Too low'
        finalScore--;
        score.innerHTML=finalScore
    }
}

    // if(guessedNumber>20){
    //     console.log("Guess the number between 1 to 20")
    //     section.style.backgroundColor="orange";
    //     update.innerHTML="Guess the number between 1 to 20"
    // }else if (finalScore) {
    //     update.innerHTML="Failed"
    // }else{
    //     if(guessedNumber>luckyNumber){
    //         console.log('your number is greater than lucky number')
    //         section.style.backgroundColor="red";
    //         update.innerHTML="Too High"
    //         finalScore--;
    //         score.innerText=finalScore
            
    //     }else if(guessedNumber===luckyNumber){
    //         console.log("You Won")
    //         update.innerHTML="You Won"
    //         section.style.backgroundColor="green";
        
    //     }else if(guessedNumber<luckyNumber){
    //         console.log("Your number is lesser than lucky number")
    //         section.style.backgroundColor="darkred"
    //         update.innerHTML="Too Low"
    //         finalScore--;

    //         score.innerText=finalScore
    //     }
          
      
    // }

    
}

playAgain.addEventListener('click',again)

function again(){
    score.innerText=10
}



console.log(luckyNumber)


