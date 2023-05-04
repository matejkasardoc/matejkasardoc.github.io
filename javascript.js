const app = new Vue({
  el: '#app',
  data: {
    isQuizRunning: false,
    currentProblem: '',
    answer: '',
    correctAnswers: 0,
    totalProblems: 10,
    problems: [],
    startTime: null,
    endTime: null,
  },
  computed: {
    isFinished() {
      return this.correctAnswers === this.totalProblems;
    },
    score() {
      return this.correctAnswers;
    },
    timeElapsed() {
      return ((this.endTime - this.startTime) / 1000).toFixed(1);
    },
  },
  methods: {
    startQuiz() {
      this.isQuizRunning = true;
      this.problems = this.generateProblems();
      this.currentProblem = this.problems[0];
      this.startTime = new Date();
    },
    generateProblems() {
      const problems = [];
      for (let i = 0; i < this.totalProblems; i++) {
        const num1 = Math.floor(Math.random() * 11);
        const num2 = Math.floor(Math.random() * 4) + 6;
        problems.push(`${num1} x ${num2} =`);
      }
      return problems;
    },
    checkAnswer() {
      if (this.answer === eval(this.currentProblem)) {
        this.correctAnswers++;
      }
      this.answer = '';
      this.problems.shift();
      if (this.problems.length > 0) {
        this.currentProblem = this.problems[0];
      } else {
        this.isQuizRunning = false;
        this.endTime = new Date();
      }
    },
  },
});
