// Define levels, study points, and questions
const levels = [
    {
        title: "Level 3:Detection Methods.",
        studyPoints: [
            "The transit method detects dips in brightness as a planet passes in front of its star.",
            "The radial velocity method measures the star's wobble caused by the gravitational pull of a planet.",
            "Direct imaging captures light from the exoplanet itself.",
            "The gravitational microlensing technique uses the gravitational field of a star to detect planets.",
            "Space telescopes like Kepler and TESS have been instrumental in exoplanet discovery.",

        ],
        questions: [
            {
              question: "How does the transit method work?",
              options: ["Measures the star's temperature", "Detects dips in brightness", "Measures the planet's mass", "Observes planetary rings"],
              answer: 1
            },
            {
              question: "What does the radial velocity method measure?",
              options: ["The brightness of the planet", "The distance from Earth to the star", "The star's wobble due to a planet's gravity", "The planet's temperature"],
              answer: 2
            },
            {
              question: "What is direct imaging?",
              options: ["Measuring light years", "Capturing light from the planet itself", "Using radio waves to detect planets", "Observing star patterns"],
              answer: 1
            },
            {
              question: "What is gravitational microlensing?",
              options: ["Using mirrors to see stars", "Using gravity to detect planets", "A method for measuring distances in space", "An observation of star explosions"],
              answer: 1
            },
            {
              question: "Which space telescope is known for discovering many exoplanets?",
              options: ["Hubble Space Telescope", "James Webb Space Telescope", "Kepler Space Telescope", "Chandra X-ray Observatory"],
              answer: 2
            }
          ]
          
          
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}