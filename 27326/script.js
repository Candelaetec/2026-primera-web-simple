document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');
  const ratingValue = document.getElementById('rating-value');
  const savedRating = localStorage.getItem('pageRating');

  if (savedRating) {
    updateStars(savedRating);
  }

  stars.forEach(star => {
    star.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      localStorage.setItem('pageRating', value);
      updateStars(value);
      ratingValue.textContent = '¡Gracias por dar ' + value + ' estrellas!';
    });
  });

  function updateStars(value) {
    stars.forEach(s => {
      if (s.getAttribute('data-value') <= value) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  }
});
