const quizForm = document.querySelector(".quiz-form");
const ansbtn = document.querySelector("#submit-answers-btn");
const output = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "45°",
  "a + b + c",
  "no",
  "12, 16, 20",
  "Equilateral triangle",
];

function calculateScore() {
  let score = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    for (let i = 0; i < 6; i++) {
      if (value === correctAnswers[i]) {
        console.log(score);
        score = score + 1;
      }
    }
  }
  output.innerText = `Your Score Is: ${score} / 6`;
}

ansbtn.addEventListener("click", calculateScore);
