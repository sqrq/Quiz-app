const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2, 
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"],
    correct: 0,
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;
  const answerButtons = document.querySelectorAll('.answer-btn');
  
  answerButtons.forEach((button, index) => {
    button.textContent = question.answers[index];
    button.onclick = () => checkAnswer(index);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].correct;
  
  if (selectedIndex === correctIndex) {
    score++;
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('score').textContent = score;
}

document.getElementById('restart-btn').addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('question-container').style.display = 'block';
  document.getElementById('result-container').style.display = 'none';
  loadQuestion();
});


loadQuestion();
