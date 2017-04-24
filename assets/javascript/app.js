var triviaGame = {
	// array of question and answer objects
	trivia: [
		{	question: "Question #1",
			correctAns: "correct",
			answers: ["wrong", "correct", "wrong", "wrong"],
		},
		{	question: "Question #2",
			correctAns: "correct",
			answers: ["wrong", "wrong", "correct", "wrong"],
		},
		{	question: "Question #3",
			correctAns: "correct",
			answers: ["wrong", "wrong", "wrong", "correct",],
		},
		{	question: "Question #4",
			correctAns: "correct",
			answers: ["wrong", "correct", "wrong", "wrong"],
		},
		{	question: "Question #5",
			correctAns: "correct",
			answers: ["correct", "wrong", "wrong", "wrong"],
		},
		{	question: "Question #6",
			correctAns: "correct",
			answers: ["wrong", "wrong", "wrong", "correct",],
		},
		{	question: "Question #7",
			correctAns: "correct",
			answers: ["wrong", "correct", "wrong", "wrong"],
		},
		{	question: "Question #8",
			correctAns: "correct",
			answers: ["wrong", "wrong", "correct", "wrong"],
		},
		{	question: "Question #9",
			correctAns: "correct",
			answers: ["wrong", "wrong", "wrong", "correct",],
		},
		{	question: "Question #10",
			correctAns: "correct",
			answers: ["wrong", "correct", "wrong", "wrong"],
		},
		{	question: "Question #11",
			correctAns: "correct",
			answers: ["wrong", "wrong", "correct", "wrong"],
		},
		{	question: "Question #12",
			correctAns: "correct",
			answers: ["wrong", "wrong", "wrong", "correct",],
		},
	],
	// store used questions
	used: [],
	// other variables
	intervalId: null,
	time: 30,
	random: null,
	number: 0,
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	// start game function
	start: function() {
		$("#triviaArea").empty();
		$("#triviaArea").append("<h3>Time Remaining: <span id='timer'>" + triviaGame.time + "</span> Seconds</h3>");
		$("#triviaArea").append("<div id='questionArea'></div>")
		triviaGame.random = Math.floor(Math.random()*triviaGame.trivia.length);
		triviaGame.question();
	},
	// timer function
	timer: function() {
		triviaGame.time--;
		$("#timer").html(triviaGame.time);
		if (triviaGame.time === 0) {
			triviaGame.outOfTime();
		}
	},
	// pick a random question function
	getQuestion: function() {
		while (triviaGame.used.indexOf(triviaGame.random) != -1) {
			triviaGame.random = Math.floor(Math.random()*triviaGame.trivia.length);
		}
		triviaGame.used.push(triviaGame.random);
	},
	// display question and answers, and start timer function
	question: function() {
		triviaGame.getQuestion();
		$("#timer").text(30);
		$("#questionArea").empty();
		if (triviaGame.number === 9) {
			$("#questionArea").append("<h3><strong>Last Question!</strong></h3>");
		}
		$("#questionArea").append("<h2>" + triviaGame.trivia[triviaGame.random].question + "</h2>");
		for (var i = 0; i < 4; i++) {
			var button = $("<button>");
			button.addClass("btn btn-block btn-warning answers");
			button.attr("value", triviaGame.trivia[triviaGame.number].answers[i]);
			button.text(triviaGame.trivia[triviaGame.number].answers[i]);
			$("#questionArea").append(button);
		}
		intervalId = setInterval(triviaGame.timer, 1000);
		triviaGame.answer();
	},
	// correct answer, wrong answer function
	answer: function() {
		$(".answers").click(function() {
			clearInterval(intervalId);
			if ($(this).attr("value") === triviaGame.trivia[triviaGame.number].correctAns) {
				$("#questionArea").empty();
				$("#questionArea").append("<h2>Correct!</h2>");
				triviaGame.correct++;
			} else {
				$("#questionArea").empty();
				$("#questionArea").append("<h2>Nope!</h2>");
				$("#questionArea").append("<h3>The correct answer was: " + triviaGame.trivia[triviaGame.number].correctAns + "</h3>");
				triviaGame.incorrect++;
			}
			triviaGame.number++;
			if (triviaGame.number === 10) {
				setTimeout(triviaGame.end, 3000);
			} else {
				triviaGame.time = 30;
				setTimeout(triviaGame.question, 3000);
			}
		});
	},
	// out of time function
	outOfTime: function() {
		clearInterval(intervalId);
		$("#questionArea").empty();
		$("#questionArea").append("<h2>Out Of Time!</h2>");
		$("#questionArea").append("<h3>The correct answer was: " + triviaGame.trivia[triviaGame.number].correctAns + "</h3>");
		triviaGame.unanswered++;
		triviaGame.number++;
		if (triviaGame.number === 10) {
			setTimeout(triviaGame.end, 3000);
		} else {
			triviaGame.time = 30;
			setTimeout(triviaGame.question, 3000);
		}
	},
	// game over function
	end: function() {
		$("#triviaArea").empty();
		$("#triviaArea").append("<h2><strong>All done, here's how you did!</strong></h2>");
		$("#triviaArea").append("<h3>Correct answers: " + triviaGame.correct + "</h3>");
		$("#triviaArea").append("<h3>Incorrect answers: " + triviaGame.incorrect + "</h3>");
		$("#triviaArea").append("<h3>Unanswered: " + triviaGame.unanswered + "</h3>");
		$("#triviaArea").append("<button class='btn btn-lg btn-warning' id='restart'>Play Again?</button>");
		triviaGame.restart();
	},
	// restart game function
	restart: function() {
		$("#restart").click(function() {
			triviaGame.time = 30;
			triviaGame.used = [];
			triviaGame.number = 0;
			triviaGame.correct = 0;
			triviaGame.incorrect = 0;
			triviaGame.unanswered = 0;
			triviaGame.start();
		});
	},
};

$("#start").click(function() {
	triviaGame.start();
});