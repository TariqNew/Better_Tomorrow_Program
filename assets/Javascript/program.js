
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class to the program card when it comes into view
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is visible
  });

  // Observe each program card
  const programCards = document.querySelectorAll('.down-program .program');
  programCards.forEach(card => observer.observe(card));

