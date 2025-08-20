// Initialize vote counts from localStorage or set to 0
let votes = {
  A: parseInt(localStorage.getItem("votesA")) || 0,
  B: parseInt(localStorage.getItem("votesB")) || 0,
  C: parseInt(localStorage.getItem("votesC")) || 0,
};

// Function to cast a vote
function vote(candidate) {
  votes[candidate]++;
  localStorage.setItem("votesA", votes.A);
  localStorage.setItem("votesB", votes.B);
  localStorage.setItem("votesC", votes.C);
  alert(`You voted for Candidate ${candidate}!`);
}

// If we are on results.html, update the DOM
if (document.getElementById("votesA")) {
  document.getElementById("votesA").innerText = votes.A + " votes";
  document.getElementById("votesB").innerText = votes.B + " votes";
  document.getElementById("votesC").innerText = votes.C + " votes";

  // Find the leading candidate
  let maxVotes = Math.max(votes.A, votes.B, votes.C);
  let leading = "No votes yet";

  if (maxVotes > 0) {
    if (maxVotes === votes.A) leading = "Candidate A";
    if (maxVotes === votes.B) leading = "Candidate B";
    if (maxVotes === votes.C) leading = "Candidate C";
  }

  document.getElementById("leadingCandidate").innerText =
    "Leading Candidate: " + leading + " with " + maxVotes + " votes";
}
