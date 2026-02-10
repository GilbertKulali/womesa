function login() {
  const voterId = document.getElementById("voterId").value;

  if (!voterId) {
    document.getElementById("error").innerText = "Voter ID required";
    return;
  }

  if (localStorage.getItem("voted_" + voterId)) {
    document.getElementById("error").innerText = "You have already voted!";
    return;
  }

  localStorage.setItem("currentVoter", voterId);
  window.location.href = "dashboard.html";
}

function checkLogin() {
  if (!localStorage.getItem("currentVoter")) {
    window.location.href = "login.html";
  }
}

document.getElementById("voteForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const voterId = localStorage.getItem("currentVoter");

  const voteData = {
    chair: document.querySelector('input[name="chair"]:checked').value,
    vice: document.querySelector('input[name="vice"]:checked').value,
    treasurer: document.querySelector('input[name="treasurer"]:checked').value,
    marketing: document.querySelector('input[name="marketing"]:checked').value,
    time: new Date().toLocaleString()
  };

  localStorage.setItem("voted_" + voterId, JSON.stringify(voteData));
  localStorage.removeItem("currentVoter");

  alert("Vote submitted successfully!");
  window.location.href = "login.html";
});

function logout() {
  localStorage.removeItem("currentVoter");
  window.location.href = "login.html";
}
