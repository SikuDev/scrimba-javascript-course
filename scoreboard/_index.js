const homeScoreEl = document.querySelector("#home-score");
const guestScoreEl = document.getElementById("guest-score");

const homeScoreStyle = document.querySelector(".side-column.home > .score");
const guestScoreStyle = document.querySelector(".side-column.guest > .score");

const homeFoulsEl = document.querySelector("#home-fouls")
const guestFoulsEl = document.querySelector("#guest-fouls")

function reset() {
	homeScoreEl.textContent = 0;
	guestScoreEl.textContent = 0;
  homeFoulsEl.textContent = 0;
  guestFoulsEl.textContent = 0;
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
				homeScoreStyle.style.boxShadow = "0 0 10px 0 cyan";
				guestScoreStyle.style.borderColor = "#41D2FA";
				guestScoreStyle.style.boxShadow = "0 0 10px 0 cyan";
			} else {
				homeScoreStyle.style.borderColor = "#212121";
				homeScoreStyle.style.boxShadow = "0 0 10px 0 #212121";
				guestScoreStyle.style.borderColor = "#212121";
				guestScoreStyle.style.boxShadow = "0 0 10px 0 #212121";
				guestScoreStyle;
			}
			break;
		case -1:
			guestScoreStyle.style.borderColor = "#50FA6E";
			guestScoreStyle.style.boxShadow = "0 0 10px 0 #50FA6E";
			homeScoreStyle.style.borderColor = "#F94F6D";
			homeScoreStyle.style.boxShadow = "0 0 10px 0 red";
			break;
		case 1:
			homeScoreStyle.style.borderColor = "#50FA6E";
			homeScoreStyle.style.boxShadow = "0 0 10px 0 #50FA6E";
			guestScoreStyle.style.borderColor = "#F94F6D";
			guestScoreStyle.style.boxShadow = "0 0 10px 0 red";
	}
}

reset();
