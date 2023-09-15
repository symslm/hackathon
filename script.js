const animationPlayed = sessionStorage.getItem('animationPlayed');

if (!animationPlayed) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');

                // Set the flag in sessionStorage to indicate that the animation has played
                sessionStorage.setItem('animationPlayed', 'true');
            }
        });
    });

    const hidden = document.querySelectorAll('.hidden');
    hidden.forEach((el) => observer.observe(el));
} else {
    // Clear the flag in sessionStorage to allow the animation to happen again on reload
    sessionStorage.removeItem('animationPlayed');
}