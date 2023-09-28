//binary search game
// 1. generate a random number between 1 and 100
// 2. prompt the user to guess the number
// 3. if the guess is correct, end the game
// 4. if the guess is incorrect, tell the user if the guess was too high or too low
// 5. let the user guess again
// 6. repeat steps 2-5 until the user guesses the number
// 7. when the game is over, tell the user how many guesses it took them to guess the number
// 8. when the game is over, prompt the user to play again
// 9. when the user says no, end the game
// 10. when the game is over, tell the user how many games they played and their average number of guesses per game

document.addEventListener("DOMContentLoaded", function () {
    
    console.log("debuggin")
    const theNumber = Math.floor(Math.random() * 100) + 1;

    const guessInput = document.getElementById("guess");
    const submitButton = document.getElementById("submitGuessButton");
    const message = document.getElementById("result");
    const restartButton = document.getElementById("playAgainButton");

    let guessCount = 0;

    function initializeGame() {
        guessCount = 0;
        guessInput.disabled = false;
        submitButton.disabled = false;
        message.textContent = "";
        guessInput.value = "";
        guessInput.focus(); // puts the cursor in the input box

        // create a message asking the user if they want to play again
        const playAgainMessage = document.createElement("p");
        playAgainMessage.textContent = "Would you like to play again?";
        message.appendChild(playAgainMessage);

        // create a button to restart the game
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.addEventListener("click", function () {
            message.removeChild(playAgainMessage);
            message.removeChild(playAgainButton);
            initializeGame();
        });
    }

    submitButton.addEventListener("click", function () {
        const guess = Number(guessInput.value);

        console.log("debuggin1");
        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = "Please enter a number between 1 and 100.";
        } else {
            guessCount++;
            if (guess === theNumber) {
                message.textContent = "Congratulations! You guessed the number in " + guessCount + "!";
                guessInput.disabled = true;
                submitButton.disabled = true;
            } else if (guess < theNumber) {
                message.textContent = "Too low. Try again.";
            } else if (guess > theNumber) {
                message.textContent = "Too high. Try again.";
            }
        }

        

    });

    restartButton.addEventListener("click", function () {
        initializeGame();
    });

    initializeGame();

    console.log("DOM fully loaded and parsed");
});