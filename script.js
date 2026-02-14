// Genera cuori nello sfondo
function createBackgroundHearts() {
    const container = document.getElementById('hearts-bg');
    const heartSymbols = ['❤️', '💖', '💝', '💕'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-bg';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}
createBackgroundHearts();

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionArea = document.getElementById('question-area');
const celebration = document.getElementById('celebration');

// Tasto No che scappa
const moveNo = () => {
    noBtn.style.position = 'fixed';
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNo(); });
noBtn.addEventListener('mouseover', moveNo);

// Azione al Sì
yesBtn.addEventListener('click', () => {
    questionArea.classList.add('hidden');
    celebration.classList.remove('hidden');
    
    // Pioggia di coriandoli infiniti!
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) { return Math.random() * (max - min) + min; }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
});

// Aggiorna il valore dello slider in tempo reale
const scale = document.getElementById('happy-scale');
const valDisplay = document.getElementById('happy-val');
scale.addEventListener('input', () => {
    valDisplay.textContent = scale.value;
});

document.getElementById('send-plan-btn').addEventListener('click', () => {
    const posto = document.getElementById('date-place').value || "Non specificato";
    const cibo = document.getElementById('date-food').value || "Lo decideremo insieme";
    const dress = document.getElementById('date-dress').value || "Libero";
    const felicità = document.getElementById('happy-scale').value;

    const messaggio = `❤️ *CONFERMA APPUNTAMENTO* ❤️%0A%0A` +
                      `📍 Dove: *${posto}*%0A` +
                      `🍕 Cibo: *${cibo}*%0A` +
                      `👗 Dress Code: *${dress}*%0A` +
                      `😍 Livello Felicità: *${felicità}%25*%0A%0A` +
                      `Sbrigati a venirmi a prendere! 🥰`;

    const tuoNumero = "39XXXXXXXXXX"; // Inserisci il tuo numero qui!
    window.open(`https://wa.me/${tuoNumero}?text=${messaggio}`, '_blank');
});