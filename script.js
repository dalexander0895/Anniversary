
// Screens
const intro = document.getElementById("intro");
const home = document.getElementById("home");
const poem = document.getElementById("poem");
const finalScreen = document.getElementById("final");
const coupon = document.getElementById("coupon");

// Buttons
const enterButton = document.getElementById("enterButton");
const poemButton = document.getElementById("poemButton");
const finishButton = document.getElementById("finishButton");
const couponButton = document.getElementById("couponButton");
const musicToggleIntro = document.getElementById("musicToggle");
const musicToggleHome = document.getElementById("musicToggleHome");

// Audio
const bgMusic = document.getElementById("bgMusic");
let musicPlaying = false;

// Track if Final Message unlocked
let finalUnlocked = false;

// Fade-in function
function fadeIn(audio) {
  audio.volume = 0; audio.play();
  let vol = 0;
  const interval = setInterval(() => {
    if (vol < 1) { vol += 0.03; audio.volume = vol; } else clearInterval(interval);
  }, 50);
}

// Music toggle
[musicToggleIntro, musicToggleHome].forEach(btn => {
  btn.onclick = () => {
    if (!musicPlaying) { fadeIn(bgMusic); musicPlaying = true; btn.textContent = "🔊"; }
    else { bgMusic.pause(); musicPlaying = false; btn.textContent = "🔇"; }
  };
});

// Navigation
enterButton.onclick = () => {
  intro.classList.add("hidden"); home.classList.remove("hidden");
  if (!musicPlaying) { fadeIn(bgMusic); musicPlaying = true; musicToggleIntro.textContent = "🔊"; musicToggleHome.textContent = "🔊"; }
};

poemButton.onclick = () => { home.classList.add("hidden"); poem.classList.remove("hidden"); };
finishButton.onclick = () => { poem.classList.add("hidden"); finalScreen.classList.remove("hidden"); finalUnlocked = true; };

// Coupons
const coupons = ["Back Rub", "Foot Massage", "Breakfast in Bed", "Movie Night","One Chore of Your Choice","Have to say you are right","Do whatever you ask (within reason)","Babysit Bella","Make dinner of your choice","Make Lunch of your choice","Fill Gas Tank","Quicky", "Anywhere, Anytime", "Pick show or Movie (No complaints)"];
const couponList = document.getElementById("couponList");
const selectedCoupons = new Set();
couponButton.onclick = () => {
  home.classList.add("hidden"); coupon.classList.remove("hidden"); couponList.innerHTML = "";
  coupons.forEach(c => {
    const btn = document.createElement("button"); btn.textContent = c;
    if (selectedCoupons.has(c)) btn.disabled = true;
    btn.onclick = () => { selectedCoupons.add(c); btn.disabled = true; };
    couponList.appendChild(btn);
  });
};

// Back buttons
const backButtons = document.querySelectorAll(".back-btn");
backButtons.forEach(btn => {
  btn.onclick = () => {
    [poem, finalScreen, coupon].forEach(screen => screen.classList.add("hidden"));
    home.classList.remove("hidden");
    if (!finalUnlocked) finalScreen.classList.add("hidden");
  };
});
