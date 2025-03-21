const quizData = [
    {
        question: "What type of radiation is used in a CT scan for diagnosing SCLC?",
        options: [
            "Gamma rays",
            "X-rays",
            "Ultraviolet radiation",
            "Non-ionizing radiation"
        ],
        correct: 1
    },
    {
        question: "Which of the following describes a key characteristic of ionizing radiation?",
        options: [
            "Emits visible light",
            "Releases a small amount of localized energy",
            "Causes orbital electrons to be ejected",
            "Only affects surface tissues"
        ],
        correct: 2
    },
    {
        question: "Which particle type in radiation therapy is best for superficial tumors?",
        options: [
            "Photons",
            "Protons",
            "Electrons",
            "Neutrons"
        ],
        correct: 2
    },
    {
        question: "Which of the following fractionation schedules is often used for Limited-Stage SCLC?",
        options: [
          "45 Gy in 30 fractions, given twice daily (1.5 Gy per fraction)",
          "70 Gy in 7 fractions (10 Gy per fraction)",
          "20 Gy in 5 fractions (4 Gy per fraction)",
          "10 Gy in 2 fractions (5 Gy per fraction)"
        ],
        correct: 0
    },
    {
        question: "Which statement best reflects the approximate radiation dose from a single chest CT scan for diagnosing SCLC, according to Larke et al. (2011)?",
        options: [
            "Men and women receive the same dose (~2.1 mSv)",
            "Women receive a higher dose (~2.1 mSv) compared to men (~1.6 mSv)",
            "Women receive half the dose that men do (~0.8 mSv vs. 1.6 mSv)",
            "Both men and women receive only about 0.5 mSv"
     ],
        correct: 1
    },
    {
        question: "What is the primary aim of Prophylactic Cranial Irradiation (PCI) in SCLC?",
        options: [
            "To reduce the risk of severe esophagitis",
            "To reduce the risk of brain metastases",
            "To improve local control in the thorax",
            "To treat asymptomatic pleural effusions"
        ],
        correct: 1
    },
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