const winningScores = [
	[5, 3],
	[0, 7],
	[8, 1],
	[6, 4],
	[1, 2],
	[1, 8],
	[7, 9],
	[2, 1],
	[3, 3],
	[4, 0],
	[4, 8],
];

function calcScore() {
	let chiefsScore = document.querySelector('#chiefs-input').value;
	let buccsScore = document.querySelector('#buccs-input').value;

	chiefsScore = chiefsScore[chiefsScore.length - 1];
	buccsScore = buccsScore[buccsScore.length - 1];

	// console.log('chiefs:', chiefsScore);
	// console.log('buccs:', buccsScore);

	let toCompare = JSON.stringify([parseInt(chiefsScore), parseInt(buccsScore)]);

	for (let i=0;i<winningScores.length;i++) {
		document.querySelector('#result').innerHTML = '';
		console.log(JSON.stringify(winningScores[i]));
		console.log(toCompare);

		if (JSON.stringify(winningScores[i]) === toCompare) {
			let msg = document.createElement('div');
			let heading = document.createElement('h1');
			msg.setAttribute('class', 'alert alert-success p-4 m-4');
			heading.textContent = 'Winning!';
			msg.appendChild(heading);
			
			document.querySelector('#result').appendChild(msg);
			break;
		} else {
			let msg = document.createElement('div');
			let heading = document.createElement('h1');
			msg.setAttribute('class', 'alert alert-danger p-4 m-4');
			heading.textContent = 'Lame :(';
			msg.appendChild(heading);
			
			document.querySelector('#result').appendChild(msg);
		}
	}
}

document.querySelector('#chiefs-input').addEventListener('input', () => {
	calcScore();
});

document.querySelector('#buccs-input').addEventListener('input', () => {
	calcScore();
});

