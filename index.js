let home_score = 0
let guest_score = 0
setHS = document.getElementById('home-score')
setGS = document.getElementById('guest-score')

let prevEle = document.getElementById('prev')
prevEle.innerText = `Previous Score : Home (${localStorage.getItem('HprevScore')}) Guest (${localStorage.getItem('GprevScore')})`


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
    document.getElementById('team1').innerText = "Home 👑"
    document.getElementById('team2').innerText = "Guest"
  }
  
  else if (home_score==guest_score){
    document.getElementById('team2').innerText = "Guest 👔"
    document.getElementById('team1').innerText = "Home 👔"
  }

  else {
    document.getElementById('team2').innerText = "Guest 👑"
    document.getElementById('team1').innerText = "Home"
  } 
}

function reset(){
  localStorage.setItem('HprevScore', home_score)
  localStorage.setItem('GprevScore', guest_score)
  prevEle.innerText = `Previous Score : Home (${localStorage.getItem('HprevScore')}) Guest (${localStorage.getItem('GprevScore')})`
  home_score = 0
  guest_score = 0
  setHS.innerText = home_score
  setGS.innerText = guest_score
  document.getElementById('team2').innerText = "Guest"
  document.getElementById('team1').innerText = "Home"
}