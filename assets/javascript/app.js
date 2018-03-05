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
//create variables
var allQuestions = []
var currentQuestion = 0;
var thatsCorrect = 0;
var thatsIncorrect = 0;
var notAnswered = 0;


$(document).ready(function()
{ 
//make a timer function for question

function gameTimer()
{
var count = 15;
var counter = setInterval(timer, 1000);

function timer()
{
    count = count - 1;
    if (count <= 0)
    {
        clearInterval(counter);

        //call next question here*******
    }
}
$(".timer-class").html("Time Remaining: " + count + " seconds");
}
    
//start game function
$(".start-game-button").click(function()
{   //clear start button when clicked
    $(this).hide();
    //add first question to html
    $(".trivia-question").html(questions[0].question);
    //make a loop for answer choices and add to html
    var answerChoices = (questions[0].choices);
    for (var i = 0; i < answerChoices.length; i++)  
    {
    var a = $("<button>");
    a.addClass("btn");
    a.addClass("answer-buttons");
    a.text(answerChoices[i]);  
    $(".trivia-answers").append(a);
    }

});


//add timer to html
//once user clicks an answer or timer runs out, show answer
//call next question with no user inpout
//add point for correct, incorrect, unanswered question
//display the first question

//timeout function for moving on????
/*setTimeout(questionTimer, 1000 * 15);
function questionTimer()
{
$(".timer-class").append("mom?");
console.log("mom");
}*/


});

