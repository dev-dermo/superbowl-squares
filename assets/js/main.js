const winningScores = [];

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
	console.log(chiefsScore);
	console.log(buccsScore);

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

function addWinningScore (event) {
	event.preventDefault();
	let square = [];
	let ramsScore = document.querySelector("#rams").value;
	let bengalsScore = document.querySelector("#bengals").value;
	if (!ramsScore || !bengalsScore) {
		alert("you need to enter two ending scores")
		return;
	}
	ramsScore = parseInt(ramsScore);
	square.push(ramsScore);
	console.log(`rams ${ramsScore}`)
	bengalsScore = parseInt(bengalsScore);
	square.push(bengalsScore)
	console.log(`rams ${bengalsScore}`)
	winningScores.push(square);
	console.log(winningScores);
	const yourSquares = document.querySelector("#your-squares")
	yourSquares.innerHTML = "<pre>" + winningScores + "<br />" + "</pre>";
}

document.querySelector('#chiefs-input').addEventListener('input', () => calcScore());
document.querySelector('#buccs-input').addEventListener('input', () => calcScore());
document.querySelector("#addSquare").addEventListener('click', addWinningScore)
