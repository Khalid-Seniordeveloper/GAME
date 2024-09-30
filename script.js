const randomNumber = Math.floor(Math.random() * 100) + 1;
const feedback = document.getElementById("feedback");
const guessButton = document.getElementById("guessButton");

guessButton.addEventListener("click", () => {
    const userGuess = Number(document.getElementById("guessInput").value);
    if (userGuess > randomNumber) {
        feedback.textContent = "Too high!";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low!";
    } else {
        feedback.textContent = "Correct! The number was " + randomNumber;
    }
});
