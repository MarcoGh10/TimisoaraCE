// JavaScript-ul poate fi folosit pentru a adăuga clasa 'fade' la încărcarea paginii
window.addEventListener('load', function() {
    const images = document.querySelectorAll('.fade');
    images.forEach(function(img) {
      img.classList.add('fade');
    });
  });
  