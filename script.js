const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionArea = document.getElementById('question-area');
const celebration = document.getElementById('celebration');

// Funzione per muovere il pulsante
const moveNoButton = () => {
    // Rendiamo la posizione absolute solo al primo tentativo di click
    noBtn.style.position = 'fixed';
    
    // Calcoliamo limiti sicuri per lo schermo mobile
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

// Eventi per mobile (touchstart) e desktop (mouseover)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Impedisce il click reale
    moveNoButton();
});

noBtn.addEventListener('mouseover', moveNoButton);

// Successo!
yesBtn.addEventListener('click', () => {
    questionArea.classList.add('hidden');
    celebration.classList.remove('hidden');
    
    // Esplosione di cuori!
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4b6e', '#ff1493']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4b6e', '#ff1493']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
});