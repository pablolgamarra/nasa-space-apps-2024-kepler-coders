// Array of questions with context, answers, correct answer index, and fun fact
const questionBank = [
    {
        context: "Estás en el Chaco, donde un incendio ha quemado muchos árboles y plantas. Este fuego hace que el aire se ensucie y suelte humo, lo cual no es bueno para respirar.",
        question: "¿Qué harías para ayudar a reparar el daño del incendio?",
        answers: ["Plantar nuevos árboles para ayudar a la naturaleza", "Usar la tierra quemada para cultivar más comida"],
        correct: 0, // 0 is the correct answer
        fact: "Los incendios son más comunes porque se cortan muchos árboles y eso puede hacer que el aire se vuelva sucio."
    },
    {
        context: "Usar la tierra quemada para cultivar ha hecho que corten más árboles. También están usando muchos pesticidas, que son productos químicos que dañan el suelo",
        question: "¿Qué piensas que pasará si seguimos usando pesticidas?",
        answers: ["Tendremos más comida rápido y no hay que preocuparse", "El agua de los ríos se ensuciará, y los peces y las personas se enfermarán"],
        correct: 1, // 4 is the correct answer
        fact: "Cortar árboles y usar pesticidas puede hacer que la tierra se vuelva menos fértil y que haya menos plantas y animales"
    },
    {
        context: "Los pesticidas han llegado a los ríos, haciendo que el agua esté sucia. Esto puede causar problemas de salud para todos los que la usan",
        question: "Cómo crees que la contaminación del agua afecta a la gente?",
        answers: ["Aumenta las enfermedades y las personas tienen que ir más al médico", "Todos pueden seguir usando el agua sin preocuparse"],
        correct: 0, // Shakespeare is the correct answer
        fact: "El agua sucia puede enfermar a las personas y a los animales."
    },
    {
        context: "La falta de acción contra el agua sucia ha provocado que muchas personas, especialmente niños y ancianos, estén enfermando. Los hospitales están llenos, y la comunidad está preocupada",
        question: "Qué podrías hacer para ayudar con la crisis de salud?",
        answers: ["Proponer soluciones como filtros de agua y enseñar a la gente sobre la importancia de cuidar el agua", "Ignorar el problema y seguir usando agua sucia"],
        correct: 0, // Shakespeare is the correct answer
        fact: "Es muy importante tener agua limpia. Cuando el agua está sucia, la salud de las personas y los animales se pone en riesgo"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Function to load the context and fact
function loadContextAndFact() {
    const questionData = questionBank[currentQuestionIndex];
    document.getElementById("context").textContent = questionData.context;
    document.getElementById("fact-text").textContent = questionData.fact;
}

// Function to show the question and answers
function showQuestion() {
    // Hide context section and show question section
    document.getElementById("context-box").style.display = "none";
    document.getElementById("question-box").style.display = "block";
    document.getElementById("next-button-container").style.display = "none"; // Hide next button until answer is selected

    const questionData = questionBank[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    document.getElementById("option1").textContent = questionData.answers[0];
    document.getElementById("option2").textContent = questionData.answers[1];
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

    // Show the next question button
    document.getElementById("next-button-container").style.display = "block";
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

    // Move to the next question or end game
    currentQuestionIndex++;
    if (currentQuestionIndex < questionBank.length) {
        // Hide the question section and load the next context
        document.getElementById("question-box").style.display = "none";
        document.getElementById("next-button-container").style.display = "none";
        document.getElementById("context-box").style.display = "block";
        loadContextAndFact();
    } else {
        alert(`Game Over! You got ${correctAnswers} correct and ${incorrectAnswers} wrong.`);
        resetGame(); // Optional: Reset game or handle end state
    }
}

// Function to reset the game (optional)
function resetGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    loadContextAndFact();
}

// Load the first context and fact on page load
window.onload = loadContextAndFact;
