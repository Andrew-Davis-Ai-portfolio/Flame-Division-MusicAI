const unlockBtn = document.getElementById("unlock-btn");
const audioEl = document.getElementById("flame-audio"); // optional

let unlocked = false;

unlockBtn.addEventListener("click", () => {
  if (unlocked) return; // one-time ignition
  unlocked = true;

  document.body.classList.add("unlocked");

  // Optional: light haptic / click feel for mobile (best-effort)
  if (window.navigator && navigator.vibrate) {
    navigator.vibrate(30);
  }

  // Optional: play subtle crackle
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.volume = 0.35;
    audioEl.play().catch(() => {
      // ignore autoplay block
    });
  }
});
