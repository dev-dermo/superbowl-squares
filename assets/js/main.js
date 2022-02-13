const winningScores = [
	[6, 1],
	[4, 1],
	[0, 5],
	[1, 5],
	[6, 6],
	[5, 6],
	[7, 3],
	[0, 3],
	[1, 3],
	[9, 0],
	[8, 0],
	[7, 4],
	[3, 9],
	[4, 9],
	[5, 9],
	[7, 7],
	[9, 2],
	[6, 8],
	[4, 8],
	[5, 8],
];

function drawMsg(status, cls='default') {
	document.querySelector('#result').innerHTML = '';
	let msg = document.createElement('div');
	let heading = document.createElement('h1');
	msg.setAttribute('class', `alert alert-${cls} p-4 m-4`);
	heading.textContent = status;
	msg.appendChild(heading);
	
	document.querySelector('#result').appendChild(msg);
}

function calcScore() {
	let bengalsScore = document.querySelector('#bengals-input').value;
	let ramsScore = document.querySelector('#rams-input').value;

	bengalsScore = bengalsScore[bengalsScore.length - 1];
	ramsScore = ramsScore[ramsScore.length - 1];

	let toCompare = JSON.stringify([parseInt(bengalsScore), parseInt(ramsScore)]);

	for (let i=0;i<winningScores.length;i++) {
		if (JSON.stringify(winningScores[i]) === toCompare) {
			drawMsg('Winning!', 'success');
			break;
		} else {
			drawMsg('Lame :(', 'danger');
		}
	}
}

document.querySelector('#bengals-input').addEventListener('input', () => calcScore());
document.querySelector('#rams-input').addEventListener('input', () => calcScore());
