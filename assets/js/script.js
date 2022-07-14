// Wait for the DOM to finish loading before running the game
// Get the button element and add event liseners to it


document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })

    }

    /**
 * The main game 'loop', called when the crups is first loaded
 * and after the user's answer has been processed
 */
function runGame (event) {

    // Creates two random numbers between 1 and 5
    let num1 = Math.floor(Math.random() * 5) + 1;
    let num2 = Math.floor(Math.random() * 5) + 1;
    let num3 = Math.floor(Math.random() * 5) + 1;
    let num4 = Math.floor(Math.random() * 5) + 1;
    let num5 = Math.floor(Math.random() * 5) + 1;

    if (event === 'num1') {
        (num1, num2, num3, num4, num5);

}
}


/**
 * Gets the current score from the DOM and increments it by 1
 */
 function incrementScore () {

    let oldScore = parseInt(document.getElementById('wins').innerText);
    document.getElementById('wins').innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
 function incrementFail () {
    let oldScore = parseInt(document.getElementById('losses').innerText);
    document.getElementById('losses').innerText = ++oldScore;
}


function onclick () {
    let lockOn = (document.getElementsByClassName('r'))
}