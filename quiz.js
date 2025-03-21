const quizData = [
    {
        question: "What type of radiation is used in a CT scan for diagnosing SCLC?",
        options: ["Gamma rays", "X-rays", "Ultraviolet radiation", "Non-ionizing radiation"],
        correct: 1
    },
    {
        question: "Which of the following describes a key characteristic of ionizing radiation?",
        options: ["Emits visible light", "Releases a small amount of localized energy", "Causes orbital electrons to be ejected", " Only affects surface tissues"],
        correct: 2
    },
    {
        question: "Which particle type in radiation therapy is best for superficial tumors?",
        options: ["Photons", "Protons", "Electrons", "Neutrons"],
        correct: 2
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