var startbtn = document.getElementById("start-btn");
var time = document.getElementById("countdown");
var timer = 0;
var seconds = 60;
var questionsContainer = document.getElementById("questions");
var list = document.getElementById("choices");

const questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "script.js", "<js>", "<script.js>"],
    answer: "<script>",
  },
  {
    title: "What does the logical operator && mean?",
    choices: ["while", "if", "and", "but"],
    answer: "and",
  },
  {
    title: "How do you create a function in JavaScript",
    choices: ["funtion myFunction()", "function = myFunction()", "function is myFunction", "myFunction"],
    answer: "function myFunction()",
  },
  {
    title: "Which of the following options is used to assign a value to a variable?",
    choices: ["=", "*", "$", ";"],
    answer: "=",
  },
];

// This will register the click on the start button and start the timer and all subsequent code

startbtn.addEventListener("click", () => {
  if (timer === 0) {
    timer = setInterval(function () {
      seconds--;
      time.textContent = "Time: " + seconds;
      if (seconds <= 0) {
        clearInterval(timer);
        time.textContent = "Time is up!";
      }
    }, 1000);
  }
  renderQuestions();
});

function renderQuestions() {
  questionsContainer.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var questionShown = questions[i].title;
    questionsContainer.textContent = questionShown;

    var answerShown = questions[i].choices;
    for (var i = 0; i < answerShown.length; i++) {
      var answerShown = questions[i].choices;
      var button = document.createElement("button");
      button.textContent = i;
      questionsContainer.appendChild(list);
      list.appendChild(button);
    }
  }
  displayChoices(questionsIndex)
}

// This shows all the question and answers on the page

function displayChoices(questionIndex) {
  questionsContainer.innerHTML = "";
  ulList.innerHTML = "";}
  for (var i = 0; i < questionsAsked.length; i++) {
    var questionDisplayed = questionsAsked[questionIndex].title;
    var answerDisplayed = questionsAsked[questionIndex].choices;
    questionsContainer.textContent = questionDisplayed;
  }

   //Functional loop forEach will append all the possible choices to the page as buttons
   answerDisplayed.forEach(function (choice) {
    var listItem = document.createElement("button");
    listItem.textContent = choice;
    questionsContainer.appendChild(ulList);
    ulList.appendChild(listItem);
    listItem.addEventListener("click", correctAnswer);
  }); 