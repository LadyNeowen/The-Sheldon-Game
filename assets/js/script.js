var you;
var yourScore = 0;
var computer;
var computerScore = 0;
var gameOver;
var turns = 0;

var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = choices[i] + '.jpg';
        choice.addEventListener('click', selectChoice);
        document.getElementById('choices').append(choice);
    }
}

function selectChoice () {
    you = this.id;
    document.getElementById('your-choice').src = you + '.jpg';

    // random for computer

    computer = choices[Math.floor(Math.random() * choices.length)]; 
    document.getElementById('computers-choice').src = computer + '.jpg'


    // check for winner

    if (you == computer) {
        yourScore += 0;
        computerScore += 0;
  } 
    else {
        if (you == 'rock') {
            if (computer == 'scissors' || computer == 'lizard') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');

            }
        }
        
        if (you == 'paper') {
            if (computer == 'rock' || computer == 'spock') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
    
            }
        }
        if (you == 'scissors') {
            if (computer == 'paper' || computer == 'lizard') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
                
            }
        }
        
        if (you == 'lizard') {
            if (computer == 'spock' || computer == 'paper') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
                
            }
        }
        if (you == 'spock') {
            if (computer == 'scissors' || computer == 'rock') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
                

            }
           /* function gameOver () {
                if (computerScore > 6);
                alert('Game Over!') {
                    else if (yourScore > 6;)
                    alert('Game Over!')
                }
            }
            */

    }
    

}


    document.getElementById('your-score').innerText = yourScore;
    document.getElementById('computers-score').innerText = computerScore;
  }



 /* for (let turns = 0; turns < 6; turns++); if (turns == 6) { 
    alert(message: Game Over); 
} */


/*function gameOver () {
var paragraph = document.getElementById("winner");
var text = document.createTextNode("Oh would you look at that? You actually won!");

paragraph.appendChild(text);

}*/