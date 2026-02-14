const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const quizSection = document.getElementById('quiz-section');
const successSection = document.getElementById('success-section');

// Fa scappare il pulsante No
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Azione al click sul Sì
yesBtn.addEventListener('click', () => {
    quizSection.classList.add('hidden');
    successSection.classList.remove('hidden');
    
    // Se vuoi aggiungere i coriandoli (necessita della libreria canvas-confetti)
    // confetti(); 
});