const aboutus = () => {
	const display = document.querySelector('.tabDisplay');
	display.innerHTML = '';

	display.style.textAlign = "center";

	const title = document.createElement('div');
	display.appendChild(title);
	title.innerHTML = "About Us"
	title.style.fontWeight = "bold";
	title.style.textDecoration = "underline";
	title.style.fontSize = '2rem';
	title.style.paddingTop = '30px';
	title.style.paddingBottom = '70px';

	const welcomeMessage = document.createElement('p');
	display.appendChild(welcomeMessage);
	welcomeMessage.style.width = '50%';
	welcomeMessage.style.margin = 'auto';
	welcomeMessage.style.lineHeight = '1.6';
	welcomeMessage.style.fontSize = '1.5rem';
	welcomeMessage.style.wordWrap = 'break-word';
	welcomeMessage.innerHTML = "Odin Cafe was established in 2020 as an exercise in practicing \
								Document Object Model manipulation using only Javascript. The \
								task was to create a simple webpage for a restaurant that \
								featured event listeners. In addition to all of this, npm and \
								webpack was utilized in order to introduce the creator to the \
								more prevalent technologies in crafting modern webpages. Here \
								is a link to the exercise, if interested. <br><br>\
								https://www.theodinproject.com/courses/javascript/lessons/restaurant-page?ref=lnav";
};

export {
	aboutus,
}