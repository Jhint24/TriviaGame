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
var seconds; 
var time; 
var answered; 
var userSelect;

var gameAlerts = 
{
	correct: "The customer is always right. FALSE, you are!",
	incorrect: "NOOOOOOOOOOOOOO!",
	endTime: "'You miss 100% of the shots you don't take' -Wayne Gretzky -Michael Scott",
    finished: "The only time I set the bar low is for Limbo"
}

$(".start-game-button").on("click", function()
{
	$(this).hide();
	gameStart();
});
//empty everything and have game fresh 
function gameStart()
{
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
		var choices = $("<button>");//create button for answers
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({"data-index": i });//****data index */
        choices.addClass("answer-buttons");//bootstrap
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
		correctedAnswers();//switch pages to show corrects answers
	}
}

function correctedAnswers()
{
	$("#current-question").empty();
    $(".answer-buttons").hide(); //Clears question page
    $(".btn btb-outline-dark").empty();//tested without, not sure what this is doing**
	$(".question").empty();
		//find out if answers are correct
		//find out if answers are incorrect
		//post the alert and gif
	var isAnswerCorrect = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var answerIndex = triviaQuestions[currentQuestion].answer;
	$("#gif").html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');//gif from assets 
	//checks to see correct, incorrect, or unanswered
	if((userSelect == answerIndex) && (answered == true))
	{
		correctAnswer++;
		$("#game-alert").html(gameAlerts.correct);
	} 
	else if((userSelect != answerIndex) && (answered == true))
	{
		incorrectAnswer++;
		$("#game-alert").html(gameAlerts.incorrect);
		$("#corrected-answer").html("The correct answer was: " + isAnswerCorrect);
	} 
	else
	{
		unanswered++;
		$("#game-alert").html(gameAlerts.endTime);
		$("#corrected-answer").html("The correct answer was: " + isAnswerCorrect);
		answered = true;
	}
	//add timer for the corrected answers page here 
	if(currentQuestion == (triviaQuestions.length-1))
	{
		setTimeout(endGameScores, 5000)
	} 
	else
	{
		currentQuestion++;
		setTimeout(theQuestions, 5000);
	}	
}

function endGameScores()
{
	$("#time-remaining").empty();
	$("#game-alert").empty();
	$("#corrected-answer").empty();
	$("#gif").empty();

	$("#end-of-game").html(gameAlerts.finished);
	$("#number-answers-correct").html("Correct Answers: " + correctAnswer);
	$("#number-answers-incorrect").html("Incorrect Answers: " + incorrectAnswer);
	$("#unanswered").html("Unanswered: " + unanswered);
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