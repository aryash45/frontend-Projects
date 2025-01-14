// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#ff8300' },  // Fanta orange color
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 6 }
  }
});

// FAB button functionality
document.querySelector('.fab').addEventListener('click', function() {
    // Add your FAB button action here
    // For example, scroll to top:
    window.scrollTo({ top: 0, behavior: 'smooth' });
}); 