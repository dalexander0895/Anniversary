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

// Music toggle with fade-in
[musicToggleIntro, musicToggleHome].forEach(btn => {
  btn.onclick = () => {
    if (!musicPlaying) {
      bgMusic.volume = 0;
      bgMusic.play();
      musicPlaying = true;
      btn.textContent = "🔊";
      fadeIn(bgMusic);
    } else {
      bgMusic.pause();
      musicPlaying = false;
      btn.textContent = "🔇";
    }
  };
});

function fadeIn(audio) {
  let vol = 0;
  const interval = setInterval(() => {
    if (vol < 1) {
      vol += 0.03;
      audio.volume = vol;
    } else clearInterval(interval);
  }, 50);
}

// Navigation
enterButton.onclick = () => {
  intro.classList.add("hidden");
  home.classList.remove("hidden");
};

poemButton.onclick = () => {
  home.classList.add("hidden");
  poem.classList.remove("hidden");
};

finishButton.onclick = () => {
  poem.classList.add("hidden");
  finalScreen.classList.remove("hidden");
};

// Coupons
const coupons = [
  "Back Rub", "Foot Massage", "Breakfast in Bed", "Movie Night",
  "One Chore of Your Choice", "Coffee Made", "Picnic Together",
  "Compliment Jar", "Tech Help", "Grocery Helper"
];

const couponList = document.getElementById("couponList");
const selectedCoupons = new Set();

couponButton.onclick = () => {
  home.classList.add("hidden");
  coupon.classList.remove("hidden");
  couponList.innerHTML = "";
  coupons.forEach(c => {
    const btn = document.createElement("button");
    btn.textContent = c;
    if (selectedCoupons.has(c)) btn.disabled = true;
    btn.onclick = () => {
      selectedCoupons.add(c);
      btn.disabled = true;
    };
    couponList.appendChild(btn);
  });
};
