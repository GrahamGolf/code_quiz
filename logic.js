// Start Button to start timer and go to first question (call getCurrentQuestions & have it return currentQuestionsIndex)
// Display questions 0 in browser
// make answers buttons
// make answers class button.class =
// antime a button with that class is clicked, check answers compared to 
// update score
// if timer runs out then next question and score of zero for question
// if statement to end for loop
// Array of questions with multiple choice
// Keep track of score
// Answers to questions
// Timer continuously counting down
// clear interval every time an question is answered / set interval with new question
// End of quiz with results


var startBtn = document.querySelector("#start");
var answersBtn = document.getElementsByClassName("answers");
var questionDiv = document.querySelector("#question");
var answerDiv = document.querySelector("#answer");
var questions = [
    {"question":"what is code?", 
    "answers": ["yes", "no", "maybe"],
    "correct": "yes"},
    {"question":"Why is code?",
    "answers": ["yes", "no", "maybe"],
    "correct": "maybe"},
]
var currentQuestionIndex = 0;




// Write password to the #password input
function startQuiz() {
    getCurrentQuestion()
    console.log (answersBtn)
}

function getCurrentQuestion() {
    questionDiv.innerHTML = questions[currentQuestionIndex].question
    var question1 = document.createElement("button");
    question1.classList.add("answers");
    var question1Text = document.createTextNode(questions[currentQuestionIndex].answers[0])
    question1.appendChild(question1Text)
    answerDiv.appendChild(question1)

    var question2 = document.createElement("button");
    question2.classList.add("answers");
    var question2Text = document.createTextNode(questions[currentQuestionIndex].answers[1])
    question2.appendChild(question2Text)
    answerDiv.appendChild(question2)

    var question3 = document.createElement("button");
    question3.classList.add("answers");
    var question3Text = document.createTextNode(questions[currentQuestionIndex].answers[2])
    question3.appendChild(question3Text)
    answerDiv.appendChild(question3)
}

function checkAnswer() {
    console.log ("that")
}

// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);
[...document.querySelectorAll('.answers')].forEach(function(item) {
    item.addEventListener('click', function() {
      console.log(item.innerHTML);
    });
     });
