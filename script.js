const questionBank = [
	{
		question: 'What is the name of the first human civilization?',
		answers: [
			{ text: 'Persia', correct: false },
			{ text: 'Mesopotamia', correct: true },
			{ text: 'The Aztecs', correct: false },
			{ text: 'Pangaea', correct: false },
		],
	},
	{
		question: 'When was the first television invented?',
		answers: [
			{ text: '1895', correct: false },
			{ text: '1954', correct: false },
			{ text: '1927', correct: true },
			{ text: '1912', correct: false },
		],
	},
	{
		question:
			'Which US president served the shortest term of about two months because of dying from a simple cold?',
		answers: [
			{ text: 'William Henry Harrison', correct: true },
			{ text: 'Martin Van Buren', correct: false },
			{ text: 'Rutherford Hayes', correct: false },
			{ text: 'John Adams', correct: false },
		],
	},
	{
		question: 'Which astronaut was the first man to conduct a spacewalk?',
		answers: [
			{ text: 'Neil Armstrong', correct: false },
			{ text: 'Buzz Aldrin', correct: false },
			{ text: 'Elon Musk', correct: false },
			{ text: 'Alexei Leonov', correct: true },
		],
	},
	{
		question:
			'What famous 5th century A.D. conqueror was known as “The Scourge of God”?',
		answers: [
			{ text: 'Hannibal', correct: false },
			{ text: 'Genghis Khan', correct: false },
			{ text: 'Attila The Hun', correct: true },
			{ text: 'Alexander The Great', correct: false },
		],
	},
	{
		question: 'Who created the first successful printing press?',
		answers: [
			{ text: 'Thomas Edison', correct: false },
			{ text: 'Leonardo Da Vinci', correct: false },
			{ text: 'Nikola Tesla', correct: false },
			{ text: 'Johannes Gutenberg', correct: true },
		],
	},
	{
		question:
			'There have been four eons since the Earth’s beginning. What is the name of the current eon?',
		answers: [
			{ text: 'Phanerozoic Eon', correct: true },
			{ text: 'Proterozoic Eon', correct: false },
			{ text: 'Archean Eon', correct: false },
			{ text: 'Hadean Eon', correct: false },
		],
	},
	{
		question: 'Who was the first woman in space?',
		answers: [
			{ text: 'Anna Lee Fisher', correct: false },
			{ text: 'Valentina Tereshkova', correct: true },
			{ text: 'Sally Ride', correct: false },
			{ text: 'Mae Jemison', correct: false },
		],
	},
	{
		question: 'In which country was the largest known T-Rex skeleton found?',
		answers: [
			{ text: 'Canada', correct: true },
			{ text: 'Mexico', correct: false },
			{ text: 'Australia', correct: false },
			{ text: 'Brazil', correct: false },
		],
	},
	{
		question:
			'The Shortest war in human civilization history was between England and Zanzibar. How many hours did it last?',
		answers: [
			{ text: 'Six Days', correct: false },
			{ text: 'Less than an hour', correct: true },
			{ text: 'Five Months', correct: false },
			{ text: 'Three weeks', correct: false },
		],
	},
	{
		question:
			'In the 5,000 years of human history, what is the one disease that has been completely eradicated?',
		answers: [
			{ text: 'Smallpox', correct: true },
			{ text: 'Scurvy', correct: false },
			{ text: 'Polio', correct: false },
			{ text: 'Yellow Fever', correct: false },
		],
	},
	{
		question: 'Where is AREA 51 located?',
		answers: [
			{ text: 'California', correct: false },
			{ text: 'Colorado', correct: false },
			{ text: 'New Mexico', correct: true },
			{ text: 'Nevada', correct: false },
		],
	},
	{
		question: 'Who is the Greek goddess of victory?',
		answers: [
			{ text: 'Athena', correct: false },
			{ text: 'Nike', correct: true },
			{ text: 'Hera', correct: false },
			{ text: 'Aphrodite', correct: false },
		],
	},
	{
		question: 'What year was the first internet domain registered?',
		answers: [
			{ text: '1978', correct: false },
			{ text: '1969', correct: false },
			{ text: '1993', correct: false },
			{ text: '1985', correct: true },
		],
	},
	{
		question:
			'Which international organization formed after World War I and was headquartered in Geneva, Switzerland?',
		answers: [
			{ text: 'The Central Intelligence Agency', correct: false },
			{ text: 'The League of Nations', correct: true },
			{ text: 'The United Nations', correct: false },
			{ text: 'The Justice League', correct: false },
		],
	},
	{
		question: 'Earth is the _ planet from the sun',
		answers: [
			{ text: 'third', correct: true },
			{ text: 'sixth', correct: false },
			{ text: 'ninth', correct: false },
			{ text: 'first', correct: false },
		],
	},
	{
		question: 'What was the name of the first video posted on YouTube?',
		answers: [
			{ text: 'Evolution of Dance', correct: false },
			{ text: 'Charlie Bit My Finger', correct: false },
			{ text: 'Me at the zoo', correct: true },
			{ text: 'Chocolate Rain', correct: false },
		],
	},
	{
		question: 'Which is the smallest planet within this solar system?',
		answers: [
			{ text: 'Mercury', correct: true },
			{ text: 'Pluto', correct: false },
			{ text: 'Jupiter', correct: false },
			{ text: 'Uranus', correct: false },
		],
	},
	{
		question: 'Who invented the telephone?',
		answers: [
			{ text: 'Alfred Nobel', correct: false },
			{ text: 'Steve Jobs', correct: false },
			{ text: 'Samuel Morse', correct: false },
			{ text: 'Alexander Graham Bell', correct: true },
		],
	},
	{
		question: 'In which year did World War II end?',
		answers: [
			{ text: '1939', correct: false },
			{ text: '1942', correct: false },
			{ text: '1945', correct: true },
			{ text: '1948', correct: false },
		],
	},
];

const container = document.getElementById('question-container');
const getQuestion = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const readyButton = document.getElementById('ready-btn');
const nextButton = document.getElementById('next-btn');
const triviaScore = document.querySelector('.trivia-score');

let score = 0;

function startGame() {
	readyButton.classList.add('hide');
	mixUp = questionBank.sort(() => Math.random() - 0.5);
	currentQuestion = 0;
	container.classList.remove('hide');
	nextQuestion();
	score = 0;
	triviaScore.innerText = score;
}

function showQuestion(question) {
	getQuestion.innerText = question.question;
	question.answers.forEach((answer) => {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', chooseAnswer);
		answerButtonsElement.appendChild(button);
	});
}

function nextQuestion() {
	reset();
	showQuestion(mixUp[currentQuestion]);
}

function chooseAnswer(event) {
	const pressedButton = event.target;
	const correct = pressedButton.dataset.correct;
	if (event.target.dataset.correct) {
		score += 5;
		event.target.disabled = true;
	}
	Array.from(answerButtonsElement.children).forEach((button) => {
		addClass(button, button.dataset.correct);
	});
	if (mixUp.length > currentQuestion + 1) {
		nextButton.classList.remove('hide');
	} else {
		readyButton.innerText = 'Restart';
		readyButton.classList.remove('hide');
		alert('GAME OVER');
	}
}

function reset() {
	deleteClass(document.body);
	nextButton.classList.add('hide');
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild);
	}
}

function addClass(element, correct) {
	deleteClass(element);
	if (correct) {
		element.classList.add('correct');
		triviaScore.innerText = score;
	} else {
		element.classList.add('wrong');
	}
}

function deleteClass(element) {
	element.classList.remove('correct');
	element.classList.remove('wrong');
}

let mixUp, currentQuestion;

readyButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
	currentQuestion++;
	nextQuestion();
});
