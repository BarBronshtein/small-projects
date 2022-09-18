const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');

const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const signupX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');
const formContainer = document.querySelector('.form-container');

formContainer.addEventListener('click', () => {
	signupModal.classList.remove('display');
	loginModal.classList.remove('display');
	formContainer.classList.remove('disable');
});
signupBtn.addEventListener('click', ev => {
	ev.stopPropagation();
	signupModal.classList.add('display');
	formContainer.classList.add('disable');
});
loginBtn.addEventListener('click', ev => {
	ev.stopPropagation();
	loginModal.classList.add('display');
	formContainer.classList.add('disable');
});

signupX.addEventListener('click', () => {
	signupModal.classList.remove('display');
	formContainer.classList.remove('disable');
});
loginX.addEventListener('click', () => {
	loginModal.classList.remove('display');
	formContainer.classList.remove('disable');
});
