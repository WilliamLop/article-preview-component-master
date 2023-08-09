const shareLink = document.querySelector('.share');
const shareContainer = document.querySelector('.share__container');

shareLink.addEventListener('click', (e) => {
    e.preventDefault();
    shareContainer.classList.toggle('share__container--show');
    shareLink.classList.toggle('share--active');
});
