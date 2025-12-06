const sounds = {
  dog: new Audio("dog.mp3"),
  clap: new Audio("clap.mp3"),
  pop: new Audio("pop.mp3"),
  laugh: new Audio("laugh.mp3"),
};

let currentVolume = 1;
let isMuted = false;

function updateAllVolumes() {
  Object.values(sounds).forEach(sound => {
    sound.volume = isMuted ? 0 : currentVolume;
  });
}
updateAllVolumes();

document.querySelectorAll(".sound-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-sound");
    const audio = sounds[name];

    Object.values(sounds).forEach(snd => {
      snd.pause();
      snd.currentTime = 0;
    });

    audio.play();
  });
});

document.getElementById("volume").addEventListener("input", e => {
  currentVolume = Number(e.target.value);
  if (!isMuted) updateAllVolumes();
});

document.getElementById("muteBtn").addEventListener("click", () => {
  isMuted = !isMuted;
  updateAllVolumes();
  document.getElementById("muteBtn").textContent = isMuted ? "Unmute" : "Mute";
});
