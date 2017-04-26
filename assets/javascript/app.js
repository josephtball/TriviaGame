var triviaGame = {
	// array of question and answer objects
	trivia: [
		{	question: "A diamond jubilee marks how many years on the throne for a monarch?",
			correctAns: "60",
			answers: ["40", "30", "50", "60"],
		},
		{	question: "In which city would you find the famous medieval Catholic cathedral 'Notre Dame'?",
			correctAns: "Paris",
			answers: ["Rome", "Quebec", "Madrid", "Paris"],
		},
		{	question: "Written and directed by George Lucas, the 2005 film 'Revenge of the Sith' is an installment of which film series?",
			correctAns: "Star Wars",
			answers: ["Harry Potter", "Lord of the Rings", "Mad Max", "Star Wars",],
		},
		{	question: "How many cards does each player get at the beginning of a round of Gin Rummy?",
			correctAns: "10",
			answers: ["11", "7", "5", "10"],
		},
		{	question: "What age followed the Bronze Age?",
			correctAns: "Iron Age",
			answers: ["Stone Age", "Iron Age", "Silver Age", "Gold Age"],
		},
		{	question: "How many Presidents of the USA were there during Fidel Castro's reign of power in Cuba?",
			correctAns: "10",
			answers: ["10", "5", "12", "8",],
		},
		{	question: "In which classic novel does the heroine marry a rude and abrupt man named 'Mr. Rochester'?",
			correctAns: "Jane Eyre",
			answers: ["Jane Eyre", "Pride and Prejudice", "Mansfield Park", "Wuthering Heights"],
		},
		{	question: "Who was the first female to be the Prime Minister of the United Kingdom?",
			correctAns: "Margaret Thatcher",
			answers: ["Margaret Thatcher", "Betty Boothroyd", "Hazel Blears", "Barbara Castle"],
		},
		{	question: "Who won the best actor award at the 2015 Oscars for their role in the film 'The Theory of Everything'?",
			correctAns: "Eddie Redmayne",
			answers: ["Steve Carell", "Bradley Cooper", "Michael Fassbender", "Eddie Redmayne",],
		},
		{	question: "Costa Rica's currrency shares its name with shich part of the human digestive system?",
			correctAns: "Colon",
			answers: ["Pylorus", "Pharynx", "Duodennum", "Colon"],
		},
		{	question: "Which of the following is the real title of a novel by Virginia Wolf?",
			correctAns: "Mrs. Dalloway",
			answers: ["Mrs. Dalloway", "Mrs. Balloway", "Mrs. Calloway", "Mrs. Falloway"],
		},
		{	question: "What was the nickname of baseball legend 'Hank Aaron'?",
			correctAns: "Hammer",
			answers: ["Sultan of Swat", "Three Fingers", "Hammer", "Splendid Splinter",],
		},
		{	question: "One of two species assigned to the genus Mandrillus, what type of animal is a mandrill?",
			correctAns: "Monkey",
			answers: ["Monkey", "Bird", "Cat", "Fish"],
		},
		{	question: "In NBA, what is the shot clock set to?",
			correctAns: "24 seconds",
			answers: ["24 seconds", "32 seconds", "20 seconds", "28 seconds"],
		},
		{	question: "Located in southern Oregon, what is the deepest lake in the United States?",
			correctAns: "Crater Lake",
			answers: ["Lake Erie", "Lake Rose", "Crater Lake", "Lake Michigan"],
		},
		{	question: "In the 1988 comedy film 'A Fish Called Wanda', what do the main characters attempt to steal?",
			correctAns: "Jewels",
			answers: ["Art", "Jewels", "Bonds", "Money"],
		},
		{	question: "Voiced by Harry Shearer, what is the middle name of Mr. Burns in the TV sitcom 'The Simpsons'?",
			correctAns: "Montgomery",
			answers: ["Dallas", "Evans", "Charles", "Montgomery"],
		},
		{	question: "What does a scientist that works as an entomologist study?",
			correctAns: "Insects",
			answers: ["Plants", "Fish", "Insects", "Birds"],
		},
		{	question: "Written by Jesse Stone, the song 'Money Honey' was which groups first hit?",
			correctAns: "The Drifters",
			answers: ["The Cadillacs", "The Dominoes", "The Drifters", "The Platters"],
		},
		{	question: "Which spirit replaces Tequila to turn a Bloody Maria into a Bloody Mary?",
			correctAns: "Vodka",
			answers: ["Rum", "Whiskey", "Vodka", "Gin"],
		},
		{	question: "Which artist won the Grammy for Album of the Year with '25' at the 2017 Grammy Awards?",
			correctAns: "Adele",
			answers: ["Beyonce", "Taylor Swift", "Justin Bieber", "Adele"],
		},
		{	question: "Released in 2017, which teen drama TV series is based on characters by Archie Comics?",
			correctAns: "Riverdale",
			answers: ["Instant Star", "Edgemont", "Riverdale", "My So-Called Life"],
		},
		{	question: "Reaching number five on the Billboard Hot 100 in February of 2017, which singer had 'Love on the Brain'?",
			correctAns: "Rihanna",
			answers: ["Rihanna", "Beyonce", "Selena Gomez", "Ariana Grande"],
		},
		{	question: "Starring on the Dick Van Dyke Show as Laura Petrie, and later getting her own show, which cultrural icon died in January of 2017?",
			correctAns: "Mary Tyler Moore",
			answers: ["Betty White", "Valerie Harper", "Mary Tyler Moore", "Carol Burnett"],
		},
		{	question: "Who won the men's 2017 World Junior Figure Skating Championship in March of 2017?",
			correctAns: "Vincent Zhou",
			answers: ["Vincent Zhou", "Graham Newberry", "James Min", "Roman Sadovsky"],
		},
		{	question: "Marking the debut of Arnold Schwarzenegger as host, who won Season 15 of the 'New Celebrity Apprentice'?",
			correctAns: "Matt Iseman",
			answers: ["Matt Iseman", "Boy George", "Vince Neil", "Chael Sonnen"],
		},
		{	question: "Originally released in 1977, what Fleetwood Mac album made a resurgence on the Billboard Top Rock Albums chart in March 2017?",
			correctAns: "Rumours",
			answers: ["Rumours", "Mirage", "The Dance", "Tusk"],
		},
		{	question: "Released in March of 2017 for the Wii U, what is the latest installment of 'The Legend of Zelda' video game series?",
			correctAns: "Breath of the Wild",
			answers: ["Twilight Princess", "Breath of the Wild", "A Link Between Worlds", "Tri Force Heroes"],
		},
		{	question: "In this TV series, Vanessa Hudgens plays the role of Emily Locke, Director of Research and Development for Wayne Security?",
			correctAns: "Powerless",
			answers: ["Emerald City", "Trial and Error", "Legion", "Powerless"],
		},
		{	question: "Which movie won the Oscar for Best Picture at the 2017 Academy Awards ceremony?",
			correctAns: "Moonlight",
			answers: ["Hacksaw Ridge", "Manchester by the Sea", "Hell or High Water", "Moonlight"],
		},
		{	question: "Known for songs like Johnny B. Goode and Maybellene, which rock and roll pioneer died in March 2017?",
			correctAns: "Chuck Berry",
			answers: ["Chuck Berry", "Keith Richards", "Little Richard", "Jerry Lee Lewis"],
		},
		{	question: "The most successful film in Golden Globe Awards history, what film won all seven awards for which it had been nominated?",
			correctAns: "La La Land",
			answers: ["20th Century Women", "La La Land", "Deadpool", "Moonlight"],
		},
		{	question: "Which American songwriter/singer released their thirty-eighth studio album titled 'Triplicate' in March 2017?",
			correctAns: "Bob Dylan",
			answers: ["Bruce Springsteen", "Bob Dylan", "Willie Nelson", "Neil Young"],
		},
		{	question: "Finish the title to this 2017 monster film release, Kong - ????? Island.",
			correctAns: "Skull",
			answers: ["Skull", "Ape", "Fantasy", "Treasure"],
		},
		{	question: "The first season of this new 2017 TV series features Jessica Lange as Joan Crawford and Susan Sarandin as Bette Davis.",
			correctAns: "Feud",
			answers: ["Big little Lies", "Taboo", "Santa Clarita Diet", "Feud"],
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
			button.attr("value", triviaGame.trivia[triviaGame.random].answers[i]);
			button.text(triviaGame.trivia[triviaGame.random].answers[i]);
			$("#questionArea").append(button);
		}
		intervalId = setInterval(triviaGame.timer, 1000);
		triviaGame.answer();
	},
	// correct answer, wrong answer function
	answer: function() {
		$(".answers").click(function() {
			clearInterval(intervalId);
			if ($(this).attr("value") === triviaGame.trivia[triviaGame.random].correctAns) {
				$("#questionArea").empty();
				$("#questionArea").append("<h2>Correct!</h2>");
				triviaGame.correct++;
			} else {
				$("#questionArea").empty();
				$("#questionArea").append("<h2>Nope!</h2>");
				$("#questionArea").append("<h3>The correct answer was: " + triviaGame.trivia[triviaGame.random].correctAns + "</h3>");
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
		$("#questionArea").append("<h3>The correct answer was: " + triviaGame.trivia[triviaGame.random].correctAns + "</h3>");
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