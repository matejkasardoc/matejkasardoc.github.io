<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Test poznavanja poštevanke</title>
    <script>
      // Define the multiplication table range
      const MIN_MULTIPLIER_1 = 0;
      const MAX_MULTIPLIER_1 = 10;
      const MIN_MULTIPLIER_2 = 6;
      const MAX_MULTIPLIER_2 = 9;

      // Define the number of questions to ask
      const NUM_QUESTIONS = 10;

      // Define the timer variables
      let startTime, endTime;

      // Generate a random multiplication question
      function generateQuestion() {
        const multiplier1 = Math.floor(Math.random() * (MAX_MULTIPLIER_1 - MIN_MULTIPLIER_1 + 1)) + MIN_MULTIPLIER_1;
        const multiplier2 = Math.floor(Math.random() * (MAX_MULTIPLIER_2 - MIN_MULTIPLIER_2 + 1)) + MIN_MULTIPLIER_2;
        return { multiplier1, multiplier2, answer: multiplier1 * multiplier2 };
      }

      // Initialize the quiz
      function initQuiz() {
        // Set up the initial state
        let score = 0;
        let questionNum = 1;
        let question = generateQuestion();
        startTime = new Date();

        // Display the first question
        document.getElementById('questionNum').innerHTML = questionNum;
        document.getElementById('multiplier1').innerHTML = question.multiplier1;
        document.getElementById('multiplier2').innerHTML = question.multiplier2;

        // Handle the user's answer
        document.getElementById('answerForm').addEventListener('submit', (event) => {
          event.preventDefault();
          const userAnswer = parseInt(document.getElementById('answerInput').value, 10);
          if (userAnswer === question.answer) {
            score++;
            document.getElementById('result').innerHTML = 'Pravilno!';
          } else {
            document.getElementById('result').innerHTML = `Napačno. Pravilni odgovor je ${question.answer}.`;
          }

          // Move on to the next question
          questionNum++;
          if (questionNum > NUM_QUESTIONS) {
            // End the quiz
            endTime = new Date();
            const timeTaken = Math.round((endTime - startTime) / 1000); // Calculate time taken in seconds
            document.getElementById('score').innerHTML = `Pravilno si rešil/a ${score} od ${NUM_QUESTIONS} računov v ${timeTaken} sekundah.`;
            document.getElementById('quizForm').style.display = 'none';
            document.getElementById('endMessage').style.display = 'block';
          } else {
            // Generate a new question
            question = generateQuestion();
            document.getElementById('questionNum').innerHTML = questionNum;
            document.getElementById('multiplier1').innerHTML = question.multiplier1;
            document.getElementById('multiplier2').innerHTML = question.multiplier2;
            document.getElementById('answerInput').value = '';
            document.getElementById('result').innerHTML = '';
          }
        });
      }
    </script>
  </head>
  <body onload="initQuiz()">
    <h1>Test poznavanja poštevanke</h1>

    <p>V predvidenem času pravilno reši naslednjih 10 računov množenja:</p>
    <form id="quizForm">
      <p>Račun <span id="questionNum"></span> :</p>
      <p><span id="multiplier1"></span> x <span id="multiplier2"></span> = <input type="number" id="answerInput"></p>
      <p><input type="submit" value="Oddaj"></p>
    </form>
    <p id="result"></p>
    <div id="endMessage" style="display: none;">
      <p id="score"></p>
    </div>
    <form id="answerForm" style="display: none;">
      <p><input type="submit" value="Next Question"></p>
    </form>
<p>Kriterij za pridobitev zelene petke:</p>
6. razred največ - sekund <br>
7. razred največ - sekund <br>
8. razred največ - sekund <br>
9. razred največ - sekund <br>
  </body>
</html>
