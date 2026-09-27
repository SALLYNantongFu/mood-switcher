// Each mood pairs an encouraging message with a background color. Customize them here.
const moods = [
  { color: "#e0edff", message: "Take your time. You’re moving forward." },
  { color: "#ffe4b8", message: "One small step is still progress." },
  { color: "#d8f3e5", message: "Taking a break is part of taking care of yourself." },
  { color: "#eedfff", message: "You don’t have to be perfect. Starting takes courage." },
  { color: "#ffdfe5", message: "Remember, you deserve kindness too." },
  { color: "#d0f1f5", message: "The effort you make today adds up, little by little." }
];

let currentMood = 0;
const message = document.querySelector("#message");
const button = document.querySelector("#change-mood");

button.addEventListener("click", () => {
  // Randomly choose another mood so consecutive clicks never repeat.
  const offset = 1 + Math.floor(Math.random() * (moods.length - 1));
  currentMood = (currentMood + offset) % moods.length;
  const mood = moods[currentMood];
  document.body.style.backgroundColor = mood.color;
  document.querySelector('meta[name="theme-color"]').content = mood.color;
  message.textContent = mood.message;
});
