const exitButton = document.querySelector('.exit-button');
const imageView = document.querySelector('.image-view');
const displayImage = document.querySelector('#display-image');
const images = document.querySelectorAll('img[src^="./images/"]');

exitButton.addEventListener('click', () => {
  imageView.style.display = 'none';
});

images.forEach((image) => {
  image.addEventListener('click', (evt) => {
    imageView.style.display = 'block';
    displayImage.src = evt.currentTarget.src;
    displayImage.dataset.magnifySrc = evt.currentTarget.src;
    $(document).ready(function() {
      $('.zoom').magnify({
        magnifiedWidth: 2000,
        magnifiedHeight: 2000
      });
    });
  });
});
