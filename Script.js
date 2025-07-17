const text = "Welcome to GlowDrinkz";
let index = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (index < text.length) {
    typingText.textContent += text[index];
    index++;
    setTimeout(type, 100);
  }
}
type();
