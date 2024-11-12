if (document.getElementById("start_quiz")) {
    const start = document.getElementById("start_quiz");

    start.addEventListener("click", () => {
        window.location.href = "Quiz.html"; // Navigate to Quiz.html
    });
}


if (document.getElementById("normal")) {
    const normal = document.getElementById("normal");
    const genius = document.getElementById("genius");
    const einsteine = document.getElementById("Einsteine");

    normal.addEventListener("click", () => {
        window.location.href = "normal.html"; // Navigate to normal.html
    });

    genius.addEventListener("click", () => {
        window.location.href = "genius.html"; // Navigate to genius.html
    });

    einsteine.addEventListener("click", () => {
        window.location.href = "einsteine.html"; // Navigate to einsteine.html
    });
}
document.getElementById('submitButton').addEventListener('click', calculateResult);
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', calculateResult);
  
    function calculateResult() {
      // Correct answers for each question (key is the question name, value is the correct answer)
      const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'c',
        q5: 'c',
        q6: 'b',
        q7: 'a',
        q8: 'b',
        q9: 'd',
        q10: 'a',
        q11: 'c',
        q12: 'd',
        q13: 'a',
        q14: 'b',
        q15: 'c',
        q16: 'a',
        q17: 'b',
        q18: 'a',
        q19: 'd',
        q20: 'c'
      };
  
      let score = 0; // Track score
      const totalQuestions = Object.keys(correctAnswers).length; // Total number of questions
  
      // Loop through each question and check if the selected answer is correct
      for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
          score++; // Increment score if the answer is correct
        }
      }
  
      // Display the result
      const resultText = `You answered ${score} out of ${totalQuestions} questions correctly.`;
      const resultElement = document.getElementById('result');
      resultElement.textContent = resultText;
    }
  });
  