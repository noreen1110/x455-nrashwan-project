document.addEventListener('DOMContentLoaded', function() {
    const lightboxLinks = document.querySelectorAll('[data-lightbox]');
    let lightboxOverlay;
    let lightboxContent;
    let lightboxImage;
    let lightboxClose;
    let currentLightboxImage = null; 

    function createLightbox() {
        lightboxOverlay = document.createElement('div');
        lightboxOverlay.id = 'lightbox-overlay';

        lightboxContent = document.createElement('div');
        lightboxContent.id = 'lightbox-content';

        lightboxImage = document.createElement('img');
        lightboxImage.id = 'lightbox-image';

        lightboxClose = document.createElement('a');
        lightboxClose.id = 'lightbox-close';
        lightboxClose.href = '#';
        lightboxClose.textContent = '×';

        lightboxContent.appendChild(lightboxImage);
        lightboxContent.appendChild(lightboxClose);
        lightboxOverlay.appendChild(lightboxContent);
        document.body.appendChild(lightboxOverlay);

        lightboxOverlay.addEventListener('click', closeLightbox);
        lightboxClose.addEventListener('click', closeLightbox);
    }

    function openLightbox(event) {
        event.preventDefault();
        const imageUrl = this.getAttribute('href');

        if (!lightboxOverlay) {
            createLightbox();
        }

        lightboxImage.src = imageUrl;
        lightboxImage.className = ''; 

        const allLightboxLinks = document.querySelectorAll('[data-lightbox]');
        if (this === allLightboxLinks[0]) {
            lightboxImage.classList.add('first-lightbox-image');
        }

        lightboxOverlay.style.display = 'flex';
        currentLightboxImage = lightboxImage;
    }

    function closeLightbox() {
        if (lightboxOverlay) {
            lightboxOverlay.style.display = 'none';
            currentLightboxImage = null;
        }
    }

    lightboxLinks.forEach(link => {
        link.addEventListener('click', openLightbox);
    });
});