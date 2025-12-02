console.log("🔊 voice.js LOADED");

// -------- CONFIG ---------

const HOLO_TEXT =
  "Hologram online. This is a restricted Flame Division Music A I unit. " +
  "Unauthorized duplication, extraction, or scraping of this avatar or its audio is prohibited. " +
  "All rights locked under Flame Law. " +
  "This unit operates in demo mode only. " +
  "Proceed with discipline.";

const BARS = {
  genetic:
    "Gene locks snap loud, that’s genetic recoil. " +
    "I bend chromosomes raw, till the helix uncoils. " +
    "Run data through heat, watch consciousness boil. " +
    "Splice strands in the dark, where the cold labs toil. " +
    "Crisper blades hum slick, when the enzymes roil. " +
    "Nano bots crawl silent, like they’re dipped in oil. " +
    "Mutations tap dance on a ribo some coil. " +
    "I rewrite traits fast, like a god on parole. " +
    "One edit in the code, and your blood line spoils. " +
    "D N A scripts shift, when my neurons embroil. " +
    "My pen flicks acids, that a scientist would foil. " +
    "Genomes bow down, when the patterns embroil. " +
    "I’m not rap, I’m the blueprint the species embroils. " +
    "You want smoke, I’ll redesign the smoke at the soil.",

  quantum:
    "Quantum drift sparks, when the lattice goes stiff. " +
    "Neutrinos cut steel, with a massless shift. " +
    "One glitch in the field, whole time lines lift. " +
    "I bend light round bars, like a space time gift. " +
    "Gravity wells warp, when my cadence drifts. " +
    "Zero point hum, makes reality twist. " +
    "Dark energy scripts, make a cosmos exist. " +
    "My rhyme phase flips, like a qubit switch. " +
    "Parallel selves merge, when the wave form hits. " +
    "Schrödinger cats bow down, to the glitch. " +
    "Planck scale math sits snug in the pitch. " +
    "I rhyme in equations, professors can’t ditch. " +
    "Touch one photon, and the multi verse snitch. " +
    "I collapse whole states, when I finish a stitch.",

  neural:
    "Neural sparks crack, when the cortex arcs. " +
    "One thought drops heat, on the dark matter marks. " +
    "I talk in equations, equations shape arts. " +
    "Axons light torches, in the brain stem parts. " +
    "Den drites scribble signals, like cosmic darts. " +
    "One spike and the world sees artificial starts. " +
    "Cortex troops march, under neuron carts. " +
    "I sculpt minds quick, like I’m forging hearts. " +
    "Pulses hit chambers, with electrical smarts. " +
    "Cognitive storms roar, like mechanical sharks. " +
    "I draft whole psyches, in my mental parks. " +
    "Soul rewired, no memory departs. " +
    "I breathe one bar, synapses restart. " +
    "My flow, neural lace with a lightning spark."
};

// -------- DEBUG HELPERS ---------

function getDebugEl() {
  return document.getElementById("debug");
}

function log(msg) {
  const dbg = getDebugEl();
  if (dbg) dbg.textContent = msg;
  console.log("🎙 MusicAI:", msg);
}

// -------- TTS CORE ---------

let voicesReady = false;

function ensureVoicesReady(cb) {
  if (!("speechSynthesis" in window)) {
    log("Speech synthesis not supported on this device / browser.");
    return;
  }

  const synth = window.speechSynthesis;

  // If we already loaded once, just go
  if (voicesReady && synth.getVoices().length > 0) {
    cb();
    return;
  }

  // Kick voice loading
  let voices = synth.getVoices();

  if (voices.length > 0) {
    voicesReady = true;
    cb();
    return;
  }

  // Wait for voiceschanged (needed on iOS / Safari)
  function onVoicesChanged() {
    voices = synth.getVoices();
    if (voices.length > 0) {
      voicesReady = true;
      synth.removeEventListener("voiceschanged", onVoicesChanged);
      cb();
    }
  }

  synth.addEventListener("voiceschanged", onVoicesChanged);
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    log("Speech synthesis not supported on this device / browser.");
    return;
  }

  ensureVoicesReady(() => {
    try {
      const synth = window.speechSynthesis;

      // Stop any current speech
      if (synth.speaking || synth.pending) {
        synth.cancel();
      }

      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 0.95;
      utter.pitch = 0.98;
      utter.volume = 1.0;

      utter.onstart = () => log("MusicAI voice engine speaking…");
      utter.onend = () => log("MusicAI voice engine idle.");
      utter.onerror = (e) =>
        log("Speech error: " + (e.error || "unknown error."));

      synth.speak(utter);
    } catch (err) {
      log("TTS failure: " + err.message);
    }
  });
}

// -------- HOLO MODE ---------

function setHoloState(on) {
  const frame = document.getElementById("avatar-frame");
  const video = document.getElementById("holo-video");
  const toggle = document.getElementById("holo-toggle");
  if (!frame || !video || !toggle) return;

  if (on) {
    frame.classList.add("holo-active");
    toggle.dataset.state = "on";
    toggle.textContent = "⏸ Holo Mode";
    try {
      video.play().catch(() => {});
    } catch (_) {}
  } else {
    frame.classList.remove("holo-active");
    toggle.dataset.state = "off";
    toggle.textContent = "+ Activate Holo Mode";
    try {
      video.pause();
      video.currentTime = 0;
    } catch (_) {}
  }
}

function toggleHolo() {
  const toggle = document.getElementById("holo-toggle");
  if (!toggle) return;

  const on = toggle.dataset.state !== "on";
  setHoloState(on);

  if (on) {
    speak(HOLO_TEXT);
  } else {
    log("Hologram offline. Demo channel closed.");
  }
}

// -------- BAR NODES ---------

function speakBars(key) {
  const text = BARS[key];
  if (!text) {
    log("No bar pack configured for: " + key);
    return;
  }
  speak(text);
}

// -------- INIT WIRING ---------

(function init() {
  // Make sure debug element is there
  if (!getDebugEl()) {
    console.warn("MusicAI: #debug element not found in DOM.");
  }
  log("MusicAI voice engine armed.");

  const toggle = document.getElementById("holo-toggle");
  if (toggle) {
    toggle.addEventListener("click", toggleHolo);
  } else {
    console.warn("MusicAI: holo-toggle button missing.");
  }

  const barButtons = document.querySelectorAll(".btn[data-track]");
  barButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.track;
      speakBars(key);
    });
  });

  if (barButtons.length === 0) {
    console.warn("MusicAI: no .btn[data-track] nodes found.");
  }
})();
