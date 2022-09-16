const container = document.querySelector('.container');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const sizes = document.querySelectorAll('.sizes span');
console.log(sizes);
color2.addEventListener('click', () => {
	container.classList.add('change');
});
color1.addEventListener('click', () => {
	container.classList.remove('change');
});

sizes.forEach(el =>
	el.addEventListener('click', () => {
		const oldActive = document
			.querySelector('.size span.active')
			.classList.remove('active');

		el.classList.add('active');
	})
);
