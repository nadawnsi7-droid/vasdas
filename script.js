// Select the Explore button
const btn = document.querySelector('.btn');

// Add a click event
btn.addEventListener('click', () => {
  alert("Welcome to the ultimate site experience, Mawlatī! ✨");
});

// Example: Add a small dynamic effect for the header glow
const header = document.querySelector('header h1');
let glowIntensity = 0;
let increasing = true;

setInterval(() => {
  if (increasing) {
    glowIntensity += 1;
    if (glowIntensity > 20) increasing = false;
  } else {
    glowIntensity -= 1;
    if (glowIntensity < 5) increasing = true;
  }
  header.style.textShadow = `0 0 ${glowIntensity}px #ff416c, 0 0 ${glowIntensity * 1.5}px #ff4b2b, 0 0 ${glowIntensity * 2}px #ff4b2b`;
}, 100);
