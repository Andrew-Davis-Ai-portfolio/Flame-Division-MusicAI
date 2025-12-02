console.log("🔊 voice.js LOADED");

(function () {
  const debug = document.getElementById("debug");

  function log(msg) {
    if (debug) debug.textContent = msg;
  }

  // ─────────────────────────────────────────────
  // HOLO MODE — TTS SCRIPT
  // ─────────────────────────────────────────────
  const HOLO_TEXT =
  "Hologram online. This is a restricted Flame Division performance shell. " +
  "Unauthorized duplication, extraction, or training is strictly forbidden. " +
  "All rights locked under Flame Law. " +
  "This unit operates in demo mode only. " +
  "Proceed with discipline.";

  function setHoloState(on) {
    const frame  = document.getElementById("holo-frame");
    const toggle = document.getElementById("holo-toggle");

    if (!frame || !toggle) return;

    if (on) {
      frame.classList.add("holo-active");
      toggle.dataset.state = "on";
      toggle.textContent = "⏸ Holo Mode";
    } else {
      frame.classList.remove("holo-active");
      toggle.dataset.state = "off";
      toggle.textContent = "✦ Activate Holo Mode";
    }
  }

  function speakHolo() {
    if (!("speechSynthesis" in window)) {
      log("Speech synthesis not supported in this browser.");
      return;
    }

    // stop anything already talking
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(HOLO_TEXT);
    utter.rate = 0.96;
    utter.pitch = 0.94;
    utter.volume = 1.0;

    utter.onend = () => {
      setHoloState(false);
      log("Holo Mode sequence finished.");
    };

    window.speechSynthesis.speak(utter);
  }

  // ─────────────────────────────────────────────
  // WIRE UP THE TOGGLE BUTTON
  // ─────────────────────────────────────────────
  const holoFrame  = document.getElementById("holo-frame");
  const holoToggle = document.getElementById("holo-toggle");

  if (!holoFrame || !holoToggle) {
    log("Holo Mode controls not found.");
    return;
  }

  log("MusicAI voice engine armed.");

  holoToggle.addEventListener("click", () => {
    const isOn = holoToggle.dataset.state === "on";

    if (isOn) {
      // turn off
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setHoloState(false);
      log("Holo Mode disengaged.");
    } else {
      // turn on
      setHoloState(true);
      log("Holo Mode engaged. Starting vocal sequence.");
      speakHolo();
    }
  });
})();

document.querySelectorAll("button[data-track]").forEach(btn => {
  btn.addEventListener("click", function () {
      const track = this.getAttribute("data-track");
      const audio = new Audio(`assets/${track}.mp3`);
      audio.play().catch(err => {
          console.log("Safari blocked audio:", err);
          document.getElementById("debug").textContent =
              `Playback blocked for ${track}. Tap again.`;
      });
  });
});

// --- DIRECT USER-GESTURE AUDIO PATCH (Safari-safe) ---
document.querySelectorAll("button[data-track]").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.stopPropagation(); // ensure gesture belongs ONLY to this button

        const file = this.getAttribute("data-track");
        const src = `assets/${file}.mp3`;

        const audio = new Audio(src);

        audio.play().then(() => {
            console.log("Playing:", src);
            const dbg = document.getElementById("debug");
            if (dbg) dbg.textContent = `Now playing: ${}).catch(err => {
  console.log("PLAY ERROR:", err);
  const dbg = document.getElementById("debug");
  if (dbg) {
    dbg.textContent = `${file}: ${err.name} — ${err.message}`;
  }
});
