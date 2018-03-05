var triviaQuestions = //create list of questions
[
{
    question: "What is Michael Scott's middle name?",
    answerList: ["Allen", "Gary", "Orville", "Mykonos"],
    answer: 1,
    image: ("") 
},
{
    question: "What is the title of the movie in which Michael Scott wrote, directed and starred?",
    answerList: ["The Flenderson Files", "Fool me Once", "I Declare Bankruptcy", "Threat Level Midnight"],
    answer: 3,
    image: ("")
}];
var gifArray = ["question1", "question2"];
var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 


$(".start-game-button").on("click", function(){
	$(this).hide();
	gameStart();
});

function gameStart(){
	$("#end-of-game").empty();
	$("#number-answers-correct").empty();
	$("#number-answers-incorrect").empty();
	$("#unanswered").empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	theQuestions();
}

function theQuestions(){
	$("#game-alert").empty();
	$("#corrected-answer").empty();
	$("#gif").empty();
	answered = true;
	
	//sets up new questions & answerList
	$("#current-question").html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$(".question").html(triviaQuestions[currentQuestion].question);
	for(var i = 0; i < 4; i++){//use the number of answers 
		var choices = $("<button>");
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({"data-index": i });//****data index */
        choices.addClass("answer-buttons");
        choices.addClass("btn btb-outline-dark");
		$(".answers-list").append(choices);
	}
	timerCount();
	//clicking an answer button
	$(".answer-buttons").on("click",function(){
		userSelect = $(this).data("index");
		clearInterval(time);//time clear
		$(".answer-buttons").hide();//only hide works here? 
		correctedAnswers();
	});
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
//when answer is clicked 
//function answerClick()  {}



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