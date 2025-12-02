console.log("🔊 voice.js LOADED");

// === BARS: 3 NODES ===
const MUSIC_AI_BARS = {
  intro: `
Quantum drift sparks when the lattice goes stiff,
Neutrinos cut steel with a massless shift.
One glitch in the field — whole timelines lift.

I bend light round bars like a spacetime gift,
Gravity wells warp when my cadence drifts.
Zero-point hum makes reality twist.

Dark-energy scripts make a cosmos exist,
My rhyme-phase flips like a qubit switch.
Parallel selves merge when the waveform hits.

Schrödinger cats bow down to the glitch,
Planck-scale math sits snug in the pitch.
I rhyme in equations that professors can’t ditch.

Touch one photon — the multiverse snitch.
I collapse whole states when I finish a stitch.
  `,

  holo: `
Neural sparks crack when the cortex arcs,
One thought drops heat on the dark-matter marks.
I talk in equations — equations shape arts.

Axons light torches in the brainstem parts,
Dendrites scribble signals like cosmic darts.
One spike? And the world sees artificial starts.

Cortex troops march under neuron carts,
I sculpt minds quick like I’m forging hearts.
Pulses hit chambers with electrical smarts.

Cognitive storms roar like mechanical sharks,
I draft whole psyches in my mental parks.
Soul rewired — no memory departs.

I breathe one bar — synapses restart.
My flow? Neural lace with a lightning spark.
  `,

  shadow: `
Bio-print rage when the stem-cells blaze,
Carbon flips phase in the deep-room haze.
Scalpels turn poems — lab-grade blades.

Petri dishes bubble in a genome maze,
Cure, kill, clone — depends how I phrase.
Liquids dance slow in the cryo-case glaze.

White coats whisper when I walk hallways,
Microscope lens shake like they’re counting days.
Polymer chains snap hard in arrays.

Biotech fumes rise like militant praise,
Proteins fold quick when I code their ways.
Antibodies march like trained brigades.

One dose drops kings in a sterile daze.
My science? A war you don’t outrun or erase.
  `
};

(function () {
  const debug = document.getElementById("debug");
  const buttons = Array.from(document.querySelectorAll(".btn[data-track]"));

  let currentKey = null;
  let currentUtterance = null;
  let currentButton = null;

  function log(msg) {
    if (debug) debug.textContent = msg;
  }

  function resetButton(btn) {
    if (!btn) return;
    btn.dataset.state = "stopped";
    btn.textContent = "▶ Play";
  }

  function stopCurrent() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (currentButton) resetButton(currentButton);
    currentKey = null;
    currentUtterance = null;
    currentButton = null;
  }

  function speakTrack(key, button) {
    const text = MUSIC_AI_BARS[key];
    if (!text) {
      log("No bars mapped for key: " + key);
      return;
    }

    // If same track already playing, stop it
    if (currentKey === key && currentUtterance) {
      stopCurrent();
      log("Stopped: " + key);
      return;
    }

    // Stop any previous voice
    stopCurrent();

    if (!("speechSynthesis" in window)) {
      log("Speech synthesis not supported in this browser.");
      return;
    }

    const utter = new SpeechSynthesisUtterance(text.trim());
    currentUtterance = utter;
    currentKey = key;
    currentButton = button;

    // Style of voice
    utter.rate = 0.95;   // speed
    utter.pitch = 0.9;   // deeper tone
    utter.volume = 1.0;

    utter.onstart = () => {
      button.dataset.state = "playing";
      button.textContent = "⏸ Pause";
      log("Spitting: " + key);
    };

    utter.onend = () => {
      resetButton(button);
      currentKey = null;
      currentUtterance = null;
      currentButton = null;
      log("Finished: " + key);
    };

    utter.onerror = (e) => {
      resetButton(button);
      currentKey = null;
      currentUtterance = null;
      currentButton = null;
      log("Speech error for " + key + ": " + (e.error || "unknown error"));
    };

    window.speechSynthesis.speak(utter);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.track;
      speakTrack(key, btn);
    });
  });

  log("MusicAI voice engine armed. Tap a node to hear the cipher.");
})();
