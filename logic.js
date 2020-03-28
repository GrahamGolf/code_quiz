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
var questionDiv = documents.querySelector("#question");
var answerDiv = documents.querySelector("#answer");
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
    console.log ("quizStart");
    for (let index = 0; index < questions.length; index++) {
    console.log (questions[index].question)
    }
}
function getCurrentQuestion() {
    for (let index = 0; index < questions.length; index++) {
    console.log (questions[index].question)
    }
}


// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);