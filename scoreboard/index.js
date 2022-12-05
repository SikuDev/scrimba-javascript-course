function reset() {
  document.getElementById("home-score").textContent = 0
  document.getElementById("guest-score").textContent = 0
}

function add(points, teamId) {
  let team = document.getElementById(teamId)
  let score = parseInt(team.textContent)
  score += points
  team.textContent = score
  console.log(score)
}

reset()