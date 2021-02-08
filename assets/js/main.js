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
	let chiefsScore = document.querySelector('#chiefs-input').value;
	let buccsScore = document.querySelector('#buccs-input').value;

	chiefsScore = chiefsScore[chiefsScore.length - 1];
	buccsScore = buccsScore[buccsScore.length - 1];

	let toCompare = JSON.stringify([parseInt(chiefsScore), parseInt(buccsScore)]);

	for (let i=0;i<winningScores.length;i++) {
		if (JSON.stringify(winningScores[i]) === toCompare) {
			drawMsg('Winning!', 'success');
			break;
		} else {
			drawMsg('Lame :(', 'danger');
		}
	}
}

document.querySelector('#chiefs-input').addEventListener('input', () => calcScore());
document.querySelector('#buccs-input').addEventListener('input', () => calcScore());
