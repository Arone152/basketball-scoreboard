let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreEl =document.getElementById("home-score")
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-1")
let guestScoreBtnThree = document.getElementById("guest-score-btn-1")
let guestScoreEl =document.getElementById("guest-score")
let guestScore = 0
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame(){
    homeScoreEl.textContent  = 0
    homeScore = 0
    guestScoreEl.textContent = 0
    guestScore = 0
}