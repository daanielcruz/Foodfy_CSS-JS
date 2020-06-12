const modalOverlay = document.querySelector('#modal-overlay');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalAuthor = document.querySelector('#modal-author');
const closeButton = document.querySelector('#close-modal');

const items = document.querySelectorAll('.item');


for (let item of items) {

  item.addEventListener('click', () => {
    let itemImage = item.querySelector('img').src;
    let itemTitle = item.querySelector('h3').textContent;
    let itemAuthor = item.querySelector('p').textContent;

    modalAuthor.textContent = itemAuthor;
    modalTitle.textContent = itemTitle;
    modalImage.setAttribute('src', itemImage);
    modalOverlay.classList.remove('hide');
  });
};

closeButton.addEventListener('click', () => modalOverlay.classList.add('hide'));