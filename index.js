let home_score = 0
let guest_score = 0
setHS = document.getElementById('home-score')
setGS = document.getElementById('guest-score')

function HP(score){
  home_score += score
  setHS.innerText = home_score
  winner()
}

function GP(score){
  guest_score += score
  setGS.innerText = guest_score
  winner()
}

function winner(){
  if(home_score>guest_score){
    document.getElementById('team1').innerText = "Home 🥳"
    document.getElementById('team2').innerText = "Guest 😭"
  }
  
  else if (home_score==guest_score){
    document.getElementById('team2').innerText = "Guest 👔"
    document.getElementById('team1').innerText = "Home 👔"
  }

  else {
    document.getElementById('team2').innerText = "Guest 🥳"
    document.getElementById('team1').innerText = "Home 😭"
  } 
}

function reset(){
  localStorage.setItem("scores", JSON.stringify([[home_score, guest_score]]))
  console.log(JSON.parse(localStorage.getItem("scores")))
  let prevScore = document.getElementById("prev")
  prevScore.innerText = `Previous Scores : Home (${home_score}) Guest (${guest_score})`
  home_score = 0
  guest_score = 0
  setHS.innerText = home_score
  setGS.innerText = guest_score
  document.getElementById('team2').innerText = "Guest  "
  document.getElementById('team1').innerText = "Home  "
}