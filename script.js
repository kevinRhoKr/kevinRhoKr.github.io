const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesBtnScale = 1;

// Yes button grows continuously with smooth transition
setInterval(() => {
    yesBtnScale += 0.1;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
}, 500);

// Yes button click - show thank you page
yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div class="container thank-you">
            <img src="gif.gif">
            <h1>Yay!</h1>
        </div>
    `;
});

// No button jumps to random position on hover
noBtn.addEventListener('mouseenter', () => {
    moveNoButtonToRandomPosition();
});

function moveNoButtonToRandomPosition() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Generate random position within window bounds
    const randomX = Math.random() * (windowWidth - btnWidth);
    const randomY = Math.random() * (windowHeight - btnHeight);

    // Apply new position
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}
