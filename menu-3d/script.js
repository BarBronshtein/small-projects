const centerItem = document.querySelector('.center-item');
const menu = document.querySelector('.menu');

centerItem.addEventListener('mouseover', () => {
	menu.classList.add('show');
});
menu.addEventListener('mouseleave', () => {
	menu.classList.remove('show');
});
