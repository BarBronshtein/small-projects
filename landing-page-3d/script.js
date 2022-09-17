const DELAY = 5;
const boxes = document.querySelectorAll('.box');
const heading = document.querySelector('.heading span');
const btn = document.querySelector('.btn');

const colors = [
	'#efd81d',
	'#61dbfb',
	'#41b883',
	'#b52e31',
	'#43853d',
	'#cf6498',
	'#e04e39',
];

const techs = ['JS', 'React', 'Vue', 'Angular', 'Node', 'Sass', 'Ember'];

const links = [
	'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	'https://reactjs.org/',
	'https://vuejs.org/',
	'https://angular.io/',
	'https://nodejs.org/',
	'https://sass-lang.com/',
	'https://emberjs.com/',
];

let cur = 1;

const textStyle = () => {
	heading.style.color = colors[cur - 1];
	heading.textContent = techs[cur - 1];
	btn.style.backgroundColor = colors[cur - 1];
	btn.firstElementChild.textContent = techs[cur - 1];
	btn.href = links[cur - 1];
};

let intervalId = setInterval(() => {
	boxes.forEach(box => {
		if (cur > boxes.length) cur = 1;
		if (box.classList[1].split('-')[1] * 1 === cur) box.classList.add('active');
		else {
			box.classList.remove('active');
		}
	});
	textStyle();
	cur++;
}, DELAY * 1000);

boxes.forEach(box => {
	box.addEventListener('click', () => {
		boxes.forEach(cube => {
			cube.classList.remove('active');
		});
		box.classList.add('active');
		cur = box.classList[1].split('-')[1] * 1;
		textStyle();
		clearInterval(intervalId);
	});
});
