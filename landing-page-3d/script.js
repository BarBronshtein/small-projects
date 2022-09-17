const DELAY = 1;
const boxes = document.querySelectorAll('.box');
let cur = 1;
let intervalId = setInterval(() => {
	boxes.forEach(box => {
		if (cur > boxes.length) cur = 0;
		if (box.classList[1].split('-')[1] * 1 === cur) box.classList.add('active');
		else {
			box.classList.remove('active');
		}
	});
	cur++;
}, DELAY * 1000);
