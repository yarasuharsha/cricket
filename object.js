// GAME STATE VARIABLES
let runs = 0;
let wickets = 0;
let overs = 0;

const maxOvers = 5;
const maxWickets = 10;

// UI ELEMENTS
const runsEl = document.getElementById("runs");
const wicketsEl = document.getElementById("wickets");
const oversEl = document.getElementById("overs");
const commentaryText = document.getElementById("commentary-text");

const batButton = document.getElementById("bat-button");
const bowlButton = document.getElementById("bowl-button");

// UPDATE SCOREBOARD FUNCTION
function updateScoreboard() {
  runsEl.textContent = runs;
  wicketsEl.textContent = wickets;
  oversEl.textContent = overs;
}

// ADD RUN FUNCTION
function addRun(run) {
  runs += run;
  updateScoreboard();
  commentaryText.textContent = `Batsman scored ${run} run${run > 1 ? 's' : ''}!`;
}

// ADD WICKET FUNCTION
function addWicket() {
  if (wickets < maxWickets) {
    wickets++;
    updateScoreboard();
    commentaryText.textContent = "Oh no! Wicket down!";
  } else {
    commentaryText.textContent = "All Out!";
    alert("All Out!");
  }
}

// ADD OVER FUNCTION
function addOver() {
  if (overs < maxOvers) {
    overs++;
    updateScoreboard();
    commentaryText.textContent = `Over ${overs} completed.`;
  } else {
    commentaryText.textContent = "Innings Over!";
    alert("Innings Over!");
  }
}

// BAT BUTTON FUNCTIONALITY
function handleBatClick() {
  if (wickets >= maxWickets || overs >= maxOvers) {
    commentaryText.textContent = "Innings Over! No more batting.";
    return;
  }

  const outcome = Math.floor(Math.random() * 8); // 0–7 range
  if (outcome === 0) {
    addWicket();
  } else {
    addRun(outcome <= 6 ? outcome : 6);
  }
}

// BOWL BUTTON FUNCTIONALITY
function handleBowlClick() {
  if (overs >= maxOvers) {
    commentaryText.textContent = "Innings Over! No more bowling.";
    return;
  }

  const bowlResult = Math.floor(Math.random() * 6) + 1;
  commentaryText.textContent = `Bowler delivered: ${bowlResult}!`;
  addOver();
}

// EVENT LISTENERS
batButton.addEventListener("click", handleBatClick);
bowlButton.addEventListener("click", handleBowlClick);

// INITIAL DISPLAY
updateScoreboard();
commentaryText.textContent = "Game starts now! Click Bat or Bowl to play.";
