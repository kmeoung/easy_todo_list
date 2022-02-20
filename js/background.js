const backgrounds = document.querySelector('.bg');

const bg = [
	'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VwO7KJ04uscsZeoFJbAxygHaEK%26pid%3DApi&f=1',
	'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.In8r6Yj7wHwmyj1bpymY8QHaEK%26pid%3DApi&f=1',
	'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fMQUpQtZpKET2dIwTT1ocwHaEK%26pid%3DApi&f=1',
	'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DLgbXyRLqv7HHPKI5tE9RgHaDp%26pid%3DApi&f=1',
];

function randBgSelector() {
	const chosenImage = bg[Math.floor(Math.random() * bg.length)];
	const bgImage = document.createElement('img');
	bgImage.src = chosenImage;
	backgrounds.appendChild(bgImage);
}

randBgSelector();
