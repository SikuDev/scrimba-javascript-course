const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

const homeScoreStyle = document.getElementById("home-scorecard");
const guestScoreStyle = document.getElementById("guest-scorecard");

const homeFoulsEl = document.getElementById("home-fouls");
const guestFoulsEl = document.getElementById("guest-fouls");

const timerEl = document.getElementById("timer");
const periodEl = document.getElementById("period");

let playing = false;
let paused = false;

function reset() {
	homeScoreEl.textContent = 0;
	guestScoreEl.textContent = 0;
	homeFoulsEl.textContent = 0;
	guestFoulsEl.textContent = 0;
	playing = false;
	paused = true;
	timerEl.textContent = "00:00";
	periodEl.textContent = 0;

	const interval_id = window.setInterval(function () {},
	Number.MAX_SAFE_INTEGER);

	for (let i = 0; i < interval_id; i++) {
		window.clearInterval(i);
	}

	highlightLeader();
}

function add(points, teamId) {
	const team = document.getElementById(teamId);
	let score = parseInt(team.textContent);
	score += points;
	team.textContent = score;
	highlightLeader();
}

function highlightLeader() {
	let homeScore = parseInt(homeScoreEl.textContent);
	let guestScore = parseInt(guestScoreEl.textContent);
	let scoreDiff = homeScore - guestScore;
	let leaderCheck = Math.sign(scoreDiff);

	console.log(leaderCheck);

	switch (leaderCheck) {
		case 0:
			if (homeScore > 0 || (guestScore > 0 && (scoreDiff = 0))) {
				homeScoreStyle.style.borderColor = "#41D2FA";
				homeScoreStyle.style.boxShadow = "0 0 1rem 0 cyan";
				guestScoreStyle.style.borderColor = "#41D2FA";
				guestScoreStyle.style.boxShadow = "0 0 1rem 0 cyan";
			} else {
				homeScoreStyle.style.borderColor = "#212121";
				homeScoreStyle.style.boxShadow = "0 0 1rem 0 #212121";
				guestScoreStyle.style.borderColor = "#212121";
				guestScoreStyle.style.boxShadow = "0 0 1rem 0 #212121";
				guestScoreStyle;
			}
			break;
		case -1:
			guestScoreStyle.style.borderColor = "#50FA6E";
			guestScoreStyle.style.boxShadow = "0 0 1rem 0 #50FA6E";
			homeScoreStyle.style.borderColor = "#F94F6D";
			homeScoreStyle.style.boxShadow = "0 0 2rem 0 red";
			break;
		case 1:
			homeScoreStyle.style.borderColor = "#50FA6E";
			homeScoreStyle.style.boxShadow = "0 0 1rem 0 #50FA6E";
			guestScoreStyle.style.borderColor = "#F94F6D";
			guestScoreStyle.style.boxShadow = "0 0 2rem 0 red";
	}
}

function startTimer(duration) {
	let time = duration * 60000;

	if (!playing) {
		playing = true;
		paused = false;
		displayTime(time);
		if (time == duration * 60000 && parseInt(periodEl.textContent) < 4) {
			periodEl.textContent = parseInt(periodEl.textContent) + 1;
		} else {
			periodEl.textContent = 0;
		}
		setTimeout(() => {
			playing = false;
			paused = true;
			timerEl.textContent = "00:00";
			// Get a reference to the last interval + 1
			const interval_id = window.setInterval(function () {},
			Number.MAX_SAFE_INTEGER);

			// Clear any timeout/interval up to that id
			for (let i = 0; i < interval_id; i++) {
				window.clearInterval(i);
			}
		}, duration * 60000);
	}

	if (playing) {
		setInterval(() => {
			if (time <= 0) {
				paused = true;
				playing = false;
			} else {
				time -= 1000;
			}

			displayTime(time);
		}, 1000);
	}
}

function pause() {
	if (playing) {
		paused = true;
		playing = false;
	}
}

function displayTime(time) {
	let minutes = Math.floor(time / 1000 / 60);
	let seconds = (time / 1000) % 60;

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	timerEl.textContent = minutes + ":" + seconds;
}

reset();
