//Week 02 assignment

/* Game Intro */

alert("Welcome to Quiz Ninja!");

/* Game Questions & Answers */

const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonderwoman", realName: "Dianna Prince"},
    {name: "Batman", realName: "Bruce Wayne"}
];

/*  Start of the Game */

const game = {
    start(quiz) {

        this.questions = [...quiz];
        // Initialize score
        this.score = 0

        // Main game loop
        for (const question of this.questions) {

            // Get answer from user
            this.question = question;
            // Asks and Checks if answer is correct
            this.ask();
        }
        // End of main game loop

        this.gameOver();
    },
        /* Methods and variables */

        ask() {
            // Ask the question
            const question = `What is ${this.question.name}'s real name?`;
            // Gets response
            const response = prompt(question);
            // Checks the response
            this.check(response);
        },

        check(response) {
            // Check if answer is correct
            const answer = this.question.realName;
            if (response === answer) {
                // Increase score by 1
                this.score++;
                alert(`Correct! Your score is ${this.score}`);
            } else {
                alert(`Wrong! The correct answer was ${answer}`);
            }
        },

        gameOver() {
            // Report the player's score
            alert(`Game over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`); 
            // If ${score} is plural this condition (${score !==1 ? 's' : ''}) will add a 's' at the end
        }
}


game.start(quiz);