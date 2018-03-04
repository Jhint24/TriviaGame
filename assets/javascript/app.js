//create variables
var currentQuestion = 0;
var thatsCorrect = 0;
var thatsIncorrect = 0;
var notAnswered = 0;

var questions = //create list of questions
[{

    question: "What is Michael Scott's middle name?",
    choices: ["Allen", "Gary", "Orville", "Mykonos"],
    correctAnswer: 1,
    image: ("") 
},
{
    question: "What is the title of the movie in which Michael Scott wrote, directed and starred?",
    choices: ["The Flenderson Files", "Fool me Once", "I Declare Bankruptcy", "Threat Level Midnight"],
    correctAnswer: 3,
    image: ("")
}];
$(document).ready(function()
{ 

    
//clear start button when clicked
$(".start-game-button").click(function()
{
    $(this).hide();
    
    var answerChoices = (questions[0].choices);
    for (var i = 0; i < answerChoices.length; i++)  
    {
    var a = $("<button>");
    a.addClass("btn");
    a.addClass("answer-buttons");
    a.text(answerChoices[i]);  
    $(".trivia-answers").append(a);
    }

    $(".trivia-question").html(questions[0].question);


});

//call the first question and choices
//start a timer for question
//once user clicks an answer or timer runs out, show answer
//call next question with no user inpout
//add point for correct, incorrect, unanswered question
//display the first question



});

