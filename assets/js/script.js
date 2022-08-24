var you;
var yourScore = 0;
var computer;
var computerScore = 0;
var gameOver;

var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.class = 'choices';
        choice.src = `assets/images/${choices[i]}.jpg`;
        choice.addEventListener('click', selectChoice);
        document.getElementById('choices').append(choice);
    }
};

function selectChoice() {
    you = this.id;
    document.getElementById('your-choice').src = `assets/images/${you}.jpg`;

    // random for computer

    computer = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computers-choice').src = `assets/images/${computer}.jpg`;


    // check for winner

    if (you == computer) {
        yourScore += 0;
        computerScore += 0;
    } else {
        if (you == 'rock') {
            if (computer == 'scissors' || computer == 'lizard') {
                yourScore += 1;

            } else {
                computerScore += 1;
            }
        }

        if (you == 'paper') {
            if (computer == 'rock' || computer == 'spock') {
                yourScore += 1;


            } else {
                computerScore += 1;

            }
        }
        if (you == 'scissors') {
            if (computer == 'paper' || computer == 'lizard') {
                yourScore += 1;

            } else {
                computerScore += 1;

            }
        }

        if (you == 'lizard') {
            if (computer == 'spock' || computer == 'paper') {
                yourScore += 1;

            } else {
                computerScore += 1;

            }
        }
        if (you == 'spock') {
            if (computer == 'scissors' || computer == 'rock') {
                yourScore += 1;

            } else {
                computerScore += 1;

            }
        }

    }


    document.getElementById('your-score').innerText = yourScore;
    document.getElementById('computers-score').innerText = computerScore;
    gameOver();
}

//** Game over function with popup text for winner or looser, as well as a function to make images unclickable after user or computer reaching a score of 4 */

function gameOver() {

    const element = document.querySelector('#message');

    if (computerScore > 3) {
        element.innerText = 'Game Over! - Unsurprisingly, you have lost.';

    } else if (yourScore > 3) {
        element.innerText = 'Game Over! - Oh would you look at that? You actually won. Kudos.';
    }

    if (computerScore === 4 || yourScore === 4) {
        let divs = document.querySelectorAll('#choices img');

        for (let i = 0; i < divs.length; i++) {
            document.getElementById('choices').removeAttribute('click');
            divs[i].removeEventListener('click', selectChoice);
        }
        element.style.display = 'block';
    }
}