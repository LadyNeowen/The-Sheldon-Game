var you;
var yourScore = 0;
var computer;
var computerScore = 0;

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
        yourScore += 1;
        computerScore += 1;
  } 
    else {
        if (you == 'rock') {
            if (computer == 'scissors' || computer == 'lizard') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                document.getElementById('computers-choice').classList.add('loser');
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
                document.getElementById('your-choice').classList.add('loser');
            }
        }
        
        if (you == 'paper') {
            if (computer == 'rock' || computer == 'spock') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                document.getElementById('computers-choice').classList.add('loser');
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
                document.getElementById('your-choice').classList.add('loser');
            }
        }
        if (you == 'scissors') {
            if (computer == 'paper' || computer == 'lizard') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                document.getElementById('computers-choice').classList.add('loser');
                
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
                document.getElementById('your-choice').classList.add('loser');
                
            }
        }
        
        if (you == 'lizard') {
            if (computer == 'spock' || computer == 'paper') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                document.getElementById('computers-choice').classList.add('loser');
                
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
                document.getElementById('your-choice').classList.add('loser');
                
            }
        }
        if (you == 'spock') {
            if (computer == 'scissors' || computer == 'rock') {
                yourScore +=1;
                document.getElementById('your-choice').classList.add('winner');
                document.getElementById('computers-choice').classList.add('loser');
                
            }
            else {
                computerScore += 1;
                document.getElementById('computers-choice').classList.add('winner');
                document.getElementById('your-choice').classList.add('loser');

            }
        }


        
    }

    document.getElementById('your-score').innerText = yourScore;
    document.getElementById('computers-score').innerText = computerScore;
  }