// Counter animation for stats
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(number => {
                    const finalValue = parseInt(number.textContent);
                    const isPercentage = number.textContent.includes('%');
                    const duration = 2000;
                    const steps = 60;
                    const stepDuration = duration / steps;
                    let currentStep = 0;

                    if (isNaN(finalValue)) return;

                    const counter = setInterval(() => {
                        currentStep++;
                        const progress = currentStep / steps;
                        const currentValue = Math.floor(finalValue * progress);

                        if (isPercentage) {
                            number.textContent = currentValue + '%';
                        } else {
                            number.textContent = currentValue + (number.textContent.includes('+') ? '+' : '');
                        }

                        if (currentStep >= steps) {
                            clearInterval(counter);
                            number.textContent = number.textContent.replace(/\d+/, finalValue);
                        }
                    }, stepDuration);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

animateCounters();
