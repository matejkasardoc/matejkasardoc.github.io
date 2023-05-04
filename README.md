<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Multiplication Table Quiz</title>
</head>
<body>
  <h1>Multiplication Table Quiz</h1>

  <button onclick="startQuiz()">Start Quiz</button>
  <div id="quiz-container"></div>

  <button id="submit-answer" style="display:none;" onclick="submitAnswer()">Submit</button>

  <script>
    let startTime;
    let correctAnswers = 0;
    let questionNumber = 1;
    let currentMultiplier;
    let currentMultiplicand;
    const quizContainer = document.getElementById("quiz-container");
    
    function startQuiz() {
      quizContainer.innerHTML = "Welcome to the multiplication table quiz!";
      startTime = new Date();
      askQuestion();
      document.getElementById("submit-answer").style.display = "block";
    }

    function askQuestion() {
      currentMultiplier = Math.floor(Math.random() * 11);
      currentMultiplicand = Math.floor(Math.random() * 4) + 6;
      quizContainer.innerHTML = `Question ${questionNumber}: What is ${currentMultiplier} x ${currentMultiplicand}?`;
      questionNumber++;
    }

    function submitAnswer() {
      const answerInput = document.getElementById("answer-input");
      const userAnswer = answerInput.value;
      if (userAnswer == currentMultiplier * currentMultiplicand) {
        quizContainer.innerHTML = "Correct!";
        correctAnswers++;
      } else {
        quizContainer.innerHTML = `Sorry, the correct answer is ${currentMultiplier * currentMultiplicand}.`;
      }
      answerInput.value = "";
      if (questionNumber > 10) {
        endQuiz();
      } else {
        askQuestion();
      }
    }

    function endQuiz() {
      const endTime = new Date();
      const timeTaken = (endTime - startTime) / 1000;
      quizContainer.innerHTML = `You answered ${correctAnswers} out of 10 questions correctly in ${timeTaken.toFixed(1)} seconds.`;
      document.getElementById("submit-answer").style.display = "none";
    }
  </script>
</body>
</html>
