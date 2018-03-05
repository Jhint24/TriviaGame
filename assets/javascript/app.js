var questions = //create list of questions
[
{
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
var allQuestions = [];
var currentQuestion;
var thatsCorrect;
var thatsIncorrect;
var notAnswered;
var answered;
var count = 20;
var counter = count;

//click button to start game 
$(".start-game-button").click(function()
{   //clear start button when clicked
    $(this).hide();
});

//clear function for game  reset/start
function startGame()
{
    $("#final-message").empty();
	$("#correct-answers").empty();
	$("#incorrect-answers").empty();
	$("#unanswered").empty();
	currentQuestion = 0;
	thatsCorrect = 0;
	thatsIncorrect = 0;
	notAnswered = 0;
	pullQuestion();
}

//fuction to pull question
function pullQuestion()
{
    $("#message").empty();
	$("#corrected-answer").empty();
	$("#gif").empty();
    answered = true;
/*
    $("#current-question").html("Question #"+(currentQuestion+1)+"/"+questions.length);
	$(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");
	for(var i = 0; i < 4; i++){
		var answerChoices = $("<div>");
		answerChoices.text(triviaQuestions[currentQuestion].answerList[i]);
		answerChoices.attr({"data-index": i });
		answerChoices.addClass("this-choice");
		$(".trivia-answers").append(choices);
        
        }*/
}



//make a timer function for question

function gameTimer()
{
var count = 20;
var counter = setInterval(timer, 1000);

function timer()
{
    count = count - 1;
    if (count <= 0)
    {
        clearInterval(counter);
           return; //call next question here*******
    }

$(".timer-class").html("Time Remaining: " + count + " seconds");
}
}

//start game function
function iDontKNow()
{
    //start timer
    gameTimer();
    //add  question to html
   function loadQuestion()
   {
    $("#trivia-question").html(questions[currentQuestion].question); 
    //make a loop for answer choices and add to html
    var answerChoices = (questions[currentQuestion].choices);
    for (var i = 0; i < answerChoices.length; i++)  
        {
        var a = $("<button>");
        a.addClass("btn btn-outline-dark");
        a.addClass("answer-buttons");
        a.text(answerChoices[i]);  
        $(".trivia-answers").append(a);
        }
    }
    function nextQuestion()
    {
        counter=count;
        gameTimer();
        currentQuestion++;
        loadQuestion();
    }
}
    
//when answer is clicked 
function answerClick()  {

    }



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
}

function questionDisplayed()//function to pick a question each time
{
    for (var i = questions.length - 1; i >= 0; i--) 
    {
        if (questions[i] === 'something') 
        { 
            questions.splice(i, 1);
        }
    }
}*/

