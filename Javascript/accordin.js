const accordionTitles = document.querySelectorAll('.accordion-title');

  accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
      const row = title.parentNode;
      const content = title.nextElementSibling;
      const icon = title.querySelector('.accordion-icon');

      content.style.display = content.style.display === 'block' ? 'none' : 'block';

      // Check if the content is now visible to set the correct icon
      if (content.style.display === 'block') {
        icon.textContent = '-';
      } else {
        icon.textContent = '+';
      }

      title.classList.toggle('open');
      icon.classList.toggle('open');
      content.classList.toggle('open');
    });
  });