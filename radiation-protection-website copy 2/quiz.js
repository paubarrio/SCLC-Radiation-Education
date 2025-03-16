const quizData = [
    {
        question: "Which source accounts for the largest contribution to man-made radiation exposure?",
        options: ["Radon & Thoron", "Medical uses", "Smoke detectors", "Nuclear power plants"],
        correct: 1
    },
    {
        question: "What is the principle of radiation protection that involves minimizing time spent near a radiation source?",
        options: ["Time", "Distance", "Shielding", "ALARA"],
        correct: 0
    },
    {
        question: "Which device is used to measure radiation exposure?",
        options: ["Geiger Counter", "Thermometer", "Barometer", "Spectrometer"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    optionsEl.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = quizData[currentQuestion];
    const options = document.querySelectorAll('.option-btn');

    if (selectedIndex === question.correct) {
        score++;
        options[selectedIndex].classList.add('correct');
        resultEl.textContent = 'Correct!';
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        resultEl.textContent = 'Incorrect!';
    }

    // Disable all buttons after answer
    options.forEach(btn => btn.disabled = true);
    nextBtn.style.display = 'block';
}

function showResult() {
    resultEl.innerHTML = `Quiz Complete! Your score: ${score}/${quizData.length}`;
    nextBtn.style.display = 'none';
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        resultEl.textContent = '';
        nextBtn.style.display = 'none';
    } else {
        showResult();
    }
});

// Start the quiz
loadQuestion();