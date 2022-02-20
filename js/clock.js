const clock = document.querySelector('#clock');

function setClock() {
	const now = new Date();

	const year = now.getFullYear().toString().padStart(4, '0');
	const month = now.getMonth().toString().padStart(2, '0');
	const date = now.getDate().toString().padStart(2, '0');

	const hour = now.getHours().toString().padStart(2, '0');
	const minute = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');

	clock.innerText = `${year}-${month}-${date} ${hour}:${minute}:${seconds}`;
}

setClock();
setInterval(setClock, 1000);
