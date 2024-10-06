// Array of questions, each question contains the text, answers, and correct answer index
const questionBank = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correct: 0 // Paris is the correct answer
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1 // 4 is the correct answer
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Leo Tolstoy"],
        correct: 2 // Shakespeare is the correct answer
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Function to load a question and its answers
function loadQuestion() {
    const questionData = questionBank[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    document.getElementById("option1").textContent = questionData.answers[0];
    document.getElementById("option2").textContent = questionData.answers[1];
    document.getElementById("option3").textContent = questionData.answers[2];
    document.getElementById("option4").textContent = questionData.answers[3];
}

// Function to select an answer and track correct/incorrect answers
function selectAnswer(selectedIndex) {
    const questionData = questionBank[currentQuestionIndex];
    if (selectedIndex === questionData.correct) {
        correctAnswers++;
        alert("Correct!");
    } else {
        incorrectAnswers++;
        alert("Wrong!");
    }
    // Disable buttons after selecting an answer
    disableAnswerButtons();
}

// Function to disable answer buttons after an answer is selected
function disableAnswerButtons() {
    document.querySelectorAll('.answer').forEach(button => {
        button.disabled = true;
    });
}

// Function to load the next question
function loadNextQuestion() {
    // Enable the buttons again for the new question
    document.querySelectorAll('.answer').forEach(button => {
        button.disabled = false;
    });

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questionBank.length) {
        loadQuestion();
    } else {
        alert(`Game Over! You got ${correctAnswers} correct and ${incorrectAnswers} wrong.`);
        // Optionally, reset the game
        resetGame();
    }
}

// Function to reset the game (optional)
function resetGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    loadQuestion();
}

// Load the first question on page load
window.onload = loadQuestion;
