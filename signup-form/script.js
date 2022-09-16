const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.primary-bg .btn');

signUpBtn.addEventListener('click', () => {
	container.classList.toggle('change');
});
