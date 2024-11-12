const texto = document.querySelector('.text');
const readMore = document.querySelector('.read-more');

readMore.addEventListener('click', () => {
    texto.style.maxHeight = 'none';
    readMore.style.display = 'none';
})