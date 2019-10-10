
const questions = [
	{ q: "How many green elements in the picture?", a: 2, c: [1, 2, 3, 4] },
	{ q: "Which color is car?", a: 0 , c: ["yellow", "red", "green", "blue"] },
	{ q: "How many blue elements in the picture?", a: 2, c: [3, 2, 1, 5] },
	{ q: "How many food items in the picture?", a: 3, c: [8,1,3,5] },
	{ q: "In which row did the bird appear?", a: 0 , c: [2,1,4,3] }
];

const numbquest = questions.length;

var score = 0;

function startGame () {
	const imag1 = new guessPict();

	document.querySelector('#start').style.display = 'none';
	setTimer();
	//set up timer and pictures appear(create)
	//after time pictures desappear and question come
}

function setTimer() {
	const interval = setTimeout(() => {
		document.querySelector('.quest-pic1').style.display = 'none';
		const div = document.createElement('div');
		div.id = 'questions';
		document.querySelector('body').appendChild(div);
		displayQuestion(div);
		clearInterval(interval);
	}, 1000 * 5);
}

// function setTimer() {
// 	const interval = setTimeout(() => {
// 		document.querySelector('.quest-pic1').style.display = 'none';
// 		const div = document.createElement('div');
// 		div.id = 'questions';
// 		document.querySelector('body').appendChild(div);
// 		displayQuestion(div);
// 		clearInterval(interval);
// 	}, 1000);
// }



function displayQuestion(div) {
	div.innerHTML = '';
	const index = Math.floor(Math.random() * questions.length);
	const prompt = questions[index];
	const question = prompt.q;
	const choices = prompt.c;

	// remove element from questions list so we don't ask the same question
	// more than once
	questions.splice(index, 1);

	const label1 = document.createElement('label');
	label1.textContent = prompt.q;


	div.appendChild(label1);
    const form = document.createElement('div');
	for(let i = 0; i < prompt.c.length; i++) {
		const section = document.createElement('section');

		

		// Add radio button to select choice
		let select = document.createElement('input');
		select.type = 'radio';
		select.id = i;
		select.className = 'option';
		select.setAttribute('name','option-radio');

		// Append radio button to form div
		section.appendChild(select);

		// Create text description of choice
		let choice = document.createElement('label');
		choice.textContent = prompt.c[i];

		// Append text description to form div
		section.appendChild(choice);
		const br = document.createElement('br');
		section.appendChild(br);
        form.appendChild(section);

		choice.className = 'option';


		


	}


	let submit = document.createElement('button');
		submit.id = 'submit';
		submit.className = 'answer';
		submit.textContent = 'Submit';
		form.appendChild(submit);
		div.appendChild(form);

	//submit button and checking correct answers
	submit.addEventListener('click', function () {
		let playerChoice = Array.from(document.querySelectorAll('.option')).filter(function(b) { return b.checked });

		if(parseInt(playerChoice[0].id) === prompt.a) {
			console.log('correct');
			score++;
		} else {
			console.log('not correct');
		}
		if(questions.length > 0) {
			displayQuestion(div);
		} else {
			gameOver(div);
			//  function to tell player the game is over and display score
		}
	});

}

function gameOver(div) {
	div.innerHTML = '';
	const endGame = document.createElement('section');
	endGame.id = 'end-game';
	endGame.innerHTML = 'Your score is ' + score +' out of ' + numbquest;
	if(score === numbquest) {
		congratulate();
	}
	div.appendChild(endGame);
	// alert("Your final score is " + score +" out of " + numbquest);
	// return score;
}

function congratulate() {
	console.log('you win');
 const word = document.createElement('div');
  word.className = 'congr';
  word.id = 'win';
  word.innerHTML = 'Congratulations!';
  document.querySelector('body').appendChild(word);


 const image = document.createElement('img');
		image.src = "pict/child.jpg";
		image.className = "endjpg";
		image.style.width = "40%";
		image.style.height = "40%";
		document.body.style.backgroundColor = "white";
		document.querySelector("h1").style.color = "#cc66ff";
		document.querySelector("#win ").appendChild(image);
	}

		



class guessPict {
	constructor (color,shape,person) {
		this.color = color;
		this.shape = shape;
		this. person = person;

		document.querySelector('body').style.backgroundImage = 'none';

		const div = document.createElement('div');
		div.className = 'img-pic';
		div.id = 'pict';
		div.style.textAlign = 'center';
		document.querySelector('body').appendChild(div);

		const image = document.createElement('img');
		image.src = "pict/pic1.jpg";
		image.className = "quest-pic1";
		image.style.width = "50%";
		image.style.height = "50%";
		document.querySelector("#pict").appendChild(image);
		document.querySelector("h1").style.color = "blue";
		document.body.style.backgroundColor = "#CCE5FF";


	}
}

document.querySelector('#start-button').addEventListener('click', function() {
	startGame();
});

// trying to make submit button for questions
// document.querySelector('#submit').addEventListener('click', function() {
//  submit ()
//  document.querySelector('section').appendChild(div);
// });











