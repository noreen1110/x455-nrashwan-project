document.addEventListener('DOMContentLoaded', function() {
    const cartLinks = document.querySelectorAll('.w3-bar-item.w3-button.w3-hide-small.w3-hover-orange');
  
    cartLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
        const img = this.querySelector('.shopping-cart-img');
        if (img) {
          img.style.filter = 'brightness(1.5)';
        }
      });
  
      link.addEventListener('mouseout', function() {
        const img = this.querySelector('.shopping-cart-img');
        if (img) {
          img.style.filter = 'brightness(1)';
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const searchLinks = document.querySelectorAll('.w3-bar-item.w3-button.w3-hide-small.w3-hover-orange');
  
    searchLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
        const img = this.querySelector('.search-icon-img');
        if (img) {
          img.style.filter = 'brightness(1.5)'; // Apply brightness on hover
        }
      });
  
      link.addEventListener('mouseout', function() {
        const img = this.querySelector('.search-icon-img');
        if (img) {
          img.style.filter = 'brightness(1)'; // Reset brightness on mouseout
        }
      });
    });
  });