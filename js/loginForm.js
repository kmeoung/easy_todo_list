const loginForm = document.querySelector('#login-form');
const nameInput = loginForm.querySelector(':first-child');
const user = document.querySelector('.user');

const USER_NAME = 'USER-NAME';
const CLASS_HIDDEN = 'hidden';

function setUserName(name) {
	localStorage.setItem(USER_NAME, name);
}

function getUserName() {
	const user_name = localStorage.getItem(USER_NAME);
	if (user_name !== null) {
		loginForm.classList.add(CLASS_HIDDEN);
		user.classList.remove(CLASS_HIDDEN);
		user.innerText = `Welcome ${user_name}`;
	} else {
		loginForm.classList.remove(CLASS_HIDDEN);
		user.classList.add(CLASS_HIDDEN);
	}
}

function onSubmitLogin(event) {
	event.preventDefault();

	const userName = nameInput.value;
	setUserName(userName);

	getUserName();
}

getUserName();
loginForm.addEventListener('submit', onSubmitLogin);
