// Generate random stars
function generateStars() {
    const starsContainer = document.querySelector('.hero');
    if (!starsContainer) return;

    // Remove existing stars
    const existingStars = starsContainer.querySelectorAll('.stars');
    existingStars.forEach(star => star.remove());

    // Create new stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('stars');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `twinkle ${2 + Math.random() * 2}s infinite`;
        star.style.delay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

generateStars();
