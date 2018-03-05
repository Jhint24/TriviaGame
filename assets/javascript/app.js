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

function theQuestions()
{
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
	$(".answer-buttons").on("click",function()
	{
		userSelect = $(this).data("index");
		clearInterval(time);//time clear
		$(".answer-buttons").hide();//only hide works here? 
		correctedAnswers();
	});
}
	function timerCount()
	{
		seconds = 20;
		$("#time-remaining").html("Time Remaining: " + seconds + "  seconds");
		answered = true;
		//set timer interval here
		time = setInterval(showTimerCount, 1000);
	}
	
	function showTimerCount()
	{//what to do with info
		seconds--;
		$("#time-remaining").html("Time Remaining: " + seconds + "  seconds");
		if(seconds < 1){
			clearInterval(time);
			answered = false;
		}
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