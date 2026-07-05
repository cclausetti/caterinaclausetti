document.addEventListener('DOMContentLoaded', function () {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var lightboxImg = lightbox.querySelector('img');
  var items = document.querySelectorAll('.gallery-item img, .model-row img, .pattern-swatch img');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  items.forEach(function (img) {
    if (img.classList.contains('no-lightbox')) return;
    img.addEventListener('click', function () {
      var fullSrc = img.getAttribute('data-full') || img.getAttribute('src');
      openLightbox(fullSrc, img.getAttribute('alt'));
    });
  });

  lightbox.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
