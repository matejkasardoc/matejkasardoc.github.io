<body>
  <button onclick="startQuiz()">Start Quiz</button>
  <div id="quiz-container"></div>

  <button id="submit-answer" style="display:none;" onclick="submitAnswer()">Submit</button>

  <script>
    function startQuiz() {
      const quizContainer = document.getElementById("quiz-container");
      quizContainer.innerHTML = "Welcome to the multiplication table quiz!";

      // code to set up the quiz and display the first question goes here

      document.getElementById("submit-answer").style.display = "block";
    }

    function submitAnswer() {
      // code to handle user input goes here
    }
  </script>
</body>
