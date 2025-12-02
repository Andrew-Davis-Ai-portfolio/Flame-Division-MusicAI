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

// =========================================================
//  FLAME DIVISION • MUSICAI TTS TRACKS (BARS ENGINE)
// =========================================================

const TTS_TRACKS = {
  genetic: `
Gene-locks snap loud — that’s genetic recoil,
I bend chromosomes raw till the helix uncoils.
Run data through heat — watch consciousness boil.

Splice strands in the dark where the cold labs toil,
CRISPR blades hum slick when the enzymes roil.
Nanobots crawl silent like they’re dipped in oil.

Mutations tap-dance on a ribosome coil,
I rewrite traits fast like a god on parole.
One edit in the code and your bloodline spoils.

DNA scripts shift when my neurons embroil,
My pen flicks acids that a scientist would foil.
Genomes bow down when the patterns embroil.

I ain’t rap — I’m the blueprint the species embroils.
You want smoke? I’ll redesign the smoke at the soil.
  `,

  quantum: `
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

  neural: `
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
  `
};

function speakTrack(key) {
  const text = TTS_TRACKS[key];
  if (!text) {
    if (typeof log === "function") {
      log("No TTS track found for key: " + key);
    }
    return;
  }

  if (!("speechSynthesis" in window)) {
    if (typeof log === "function") {
      log("Speech synthesis not supported in this browser.");
    }
    return;
  }

  // stop anything currently speaking
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.95;   // cadence
  utter.pitch = 1.05;  // slight Flame lift
  utter.volume = 1.0;

  if (typeof log === "function") {
    log("Speaking TTS track: " + key);
  }

  window.speechSynthesis.speak(utter);
}

function speakTrack(key) {
  const text = TTS_TRACKS[key];
  if (!text) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.95;   // smooth cadence
  utter.pitch = 1.05;  // slight Flame elevation
  utter.volume = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}
