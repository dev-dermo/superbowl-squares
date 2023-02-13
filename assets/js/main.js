const winningScores = [
	[1, 8],
	[4, 8],
	[7, 5],
	[2, 4],
	[4, 4],
	[0, 4],
	[1, 7],
	[2, 3],
	[5, 3],
	[6, 6],
	[4, 6],
	[3, 0],
	[2, 0],
	[3, 2],
	[2, 1],
	[4, 1],
	[7, 1],
	[1, 9],
	[5, 9],
	[8, 9],
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
