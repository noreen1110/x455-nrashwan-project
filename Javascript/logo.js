document.addEventListener('DOMContentLoaded', function() {
    const logoLinks = document.querySelectorAll('.w3-bar-item:first-child');
  
    logoLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
        const img = this.querySelector('.logo-img');
        if (img) {
          img.style.filter = 'brightness(1.5)';
        }
      });
  
      link.addEventListener('mouseout', function() {
        const img = this.querySelector('.logo-img');
        if (img) {
          img.style.filter = 'brightness(1)';
        }
      });
    });
  });