const questionBank = [
	{
		question: 'What is the name of the first human civilization?',
		answers: {
			a: 'Persia',
			b: 'Mesopotamia',
			c: 'The Aztecs',
			d: 'Pangaea',
		},
		correctAnswer: 'b',
	},
	{
		question: 'When was the first television invented?',
		answers: {
			a: '1895',
			b: '1954',
			c: '1927',
			d: '1912',
		},
		correctAnswer: 'c',
	},
	{
		question:
			'Which US president served the shortest term of about two months because of dying from a simple cold?',
		answers: {
			a: 'William Henry Harrison',
			b: 'Martin Van Buren',
			c: 'Rutherford Hayes',
			d: 'John Adams',
		},
		correctAnswer: 'a',
	},
	{
		question: 'Which astronaut was the first man to conduct a spacewalk',
		answers: {
			a: 'Neil Armstrong',
			b: 'Buzz Aldrin',
			c: 'Elon Musk',
			d: 'Alexei Leonov',
		},
		correctAnswer: 'd',
	},
	{
		question:
			'What famous 5th century A.D. conqueror was known as “The Scourge of God”?',
		answers: {
			a: 'Hannibal',
			b: 'Genghis Khan',
			c: 'Attila The Hun',
			d: 'Alexander The Great',
		},
		correctAnswer: 'c',
	},
	{
		question: 'Who created the first successful printing press',
		answers: {
			a: 'Thomas Edison',
			b: 'Leonardo Da Vinci',
			c: 'Nikola Tesla',
			d: 'Johannes Gutenberg',
		},
		correctAnswer: 'd',
	},
	{
		question:
			'There have been four eons since the Earth’s beginning. What is the name of the current eon?',
		answers: {
			a: 'Phanerozoic Eon',
			b: 'Proterozoic Eon',
			c: 'Archean Eon',
			d: 'Hadean Eon',
		},
		correctAnswer: 'a',
	},
	{
		question: 'Who was the first woman in space?',
		answers: {
			a: 'Anna Lee Fisher',
			b: 'Valentina Tereshkova',
			c: 'Sally Ride',
			d: 'Mae Jemison',
		},
		correctAnswer: 'b',
	},
	{
		question: 'In which country was the largest known T-Rex skeleton found?',
		answers: {
			a: 'Canada',
			b: 'Mexico',
			c: 'Australia',
			d: 'Brazil',
		},
		correctAnswer: 'a',
	},
	{
		question:
			'The Shortest war in human civilization history was between England and Zanzibar. How many hours did it last?',
		answers: {
			a: 'Six Days',
			b: 'Less than an hour',
			c: 'Five Months',
			d: 'Three weeks',
		},
		correctAnswer: 'b',
	},
];

const questions = document.querySelector('.trivia');
const option1 = document.querySelector('.answer1');
const option2 = document.querySelector('.answer2');
const option3 = document.querySelector('.answer3');
const option4 = document.querySelector('.answer4');
const holdTrivia = document.querySelector('.trivia');
const next = document.querySelector('.next-btn');

let currentAnswer = ' ';
let answerSelected = false;

let questionSelect = 0;
questions.innerText = questionBank[questionSelect].question;
option1.innerText = questionBank[questionSelect].answers.a;
option2.innerText = questionBank[questionSelect].answers.b;
option3.innerText = questionBank[questionSelect].answers.c;
option4.innerText = questionBank[questionSelect].answers.d;

next.addEventListener('click', (event) => {
	event.preventDefault;
	answerSelected = false;
	questionSelect++;
	if (questionSelect === 10) {
		next.style.display = 'none';
	}
	document.getElementById('wrong').innerText = '';
	option1.innerText = questionBank[questionSelect].answers.a;
	option2.innerText = questionBank[questionSelect].answers.b;
	option3.innerText = questionBank[questionSelect].answers.c;
	option4.innerText = questionBank[questionSelect].answers.d;
});

option1.addEventListener('click', (event) => {
	event.preventDefault;
	if (answerSelected) {
		return;
	}
	currentAnswer = 'a';
	if (currentAnswer === questionBank[questionSelect].correctAnswer) {
		document.getElementById('correct').innerText = 'Correct';
	} else {
		document.getElementById('wrong').innerText = 'Incorrect';
	}
	answerSelected = true;
});

option2.addEventListener('click', (event) => {
	event.preventDefault;
	if (answerSelected) {
		return;
	}
	currentAnswer = 'b';
	if (currentAnswer === questionBank[questionSelect].correctAnswer) {
		document.getElementById('right').innerText = 'Correct';
	} else {
		document.getElementById('wrong').innerText = 'Incorrect';
	}
	answerSelected = true;
});

option3.addEventListener('click', (event) => {
	event.preventDefault;
	if (answerSelected) {
		return;
	}
	currentAnswer = 'c';
	if (currentAnswer === questionBank[questionSelect].correctAnswer) {
		document.getElementById('right').innerText = 'Correct';
	} else {
		document.getElementById('wrong').innerText = 'Incorrect';
	}
	answerSelected = true;
});
option4.addEventListener('click', (event) => {
	event.preventDefault;
	if (answerSelected) {
		return;
	}
	currentAnswer = 'd';
	if (currentAnswer === questionBank[questionSelect].correctAnswer) {
		document.getElementById('right').innerText = 'Correct';
	} else {
		document.getElementById('wrong').innerText = 'Incorrect';
	}
	answerSelected = true;
});

holdTrivia.addEventListener('click', (event) => {
	event.preventDefault;
	if (questionSelect === 10) {
		holdTrivia.style.display = 'none';
		gameOver();
	}
});
