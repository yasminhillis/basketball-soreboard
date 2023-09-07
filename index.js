let homeScreen = document.getElementById('home-screen');
let guestScreen = document.getElementById('guest-screen');

let homeScreenVal = document.getElementById('home-screen').textContent;
let guestScreenVal = document.getElementById('guest-screen').textContent;

function addOneToHome() {
  let homeScreenVal = document.getElementById('home-screen').textContent;
  homeScreenVal = Number(homeScreenVal);
  homeScreen.textContent = homeScreenVal + 1;
}

function addTwoToHome() {
  let homeScreenVal = document.getElementById('home-screen').textContent;
  homeScreenVal = Number(homeScreenVal);
  homeScreen.textContent = homeScreenVal + 2;
}

function addThreeToHome() {
  let homeScreenVal = document.getElementById('home-screen').textContent;
  homeScreenVal = Number(homeScreenVal);
  homeScreen.textContent = homeScreenVal + 3;
}

function addOneToGuest() {
  let guestScreenVal = document.getElementById('guest-screen').textContent;
  guestScreenVal = Number(guestScreenVal);
  guestScreen.textContent = guestScreenVal + 1;
}

function addTwoToGuest() {
  let guestScreenVal = document.getElementById('guest-screen').textContent;
  guestScreenVal = Number(guestScreenVal);
  guestScreen.textContent = guestScreenVal + 2;
}

function addThreeToGuest() {
  let guestScreenVal = document.getElementById('guest-screen').textContent;
  guestScreenVal = Number(guestScreenVal);
  guestScreen.textContent = guestScreenVal + 3;
}

function newGame() {
  homeScreen.textContent = 0;
  guestScreen.textContent = 0;
}
