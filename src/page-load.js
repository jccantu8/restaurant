const loadpage = () => {
	const header = document.createElement('header');
	header.innerHTML = "Odin Cafe";
	const restaurantImage = document.createElement('img');
	restaurantImage.id = 'restaurantImage';
	restaurantImage.src = '../src/assets/images/restaurant.jpg';
	header.appendChild(restaurantImage);
	document.getElementById('content').appendChild(header);

	const body = document.createElement('div');
	body.className = 'mainInfo';
	document.getElementById('content').appendChild(body);

	const tabs = document.createElement('div');
	tabs.className = 'tabs';
	document.querySelector('.mainInfo').appendChild(tabs);

	const aboutusTab = document.createElement('div');
	aboutusTab.className = 'aboutusTab';
	aboutusTab.innerHTML = 'About Us'
	document.querySelector('.tabs').appendChild(aboutusTab);

	const menuTab = document.createElement('div');
	menuTab.className = 'menuTab';
	menuTab.innerHTML = 'Menu'
	document.querySelector('.tabs').appendChild(menuTab);

	const contactTab = document.createElement('div');
	contactTab.className = 'contactTab';
	contactTab.innerHTML = 'Contact'
	document.querySelector('.tabs').appendChild(contactTab);

	const tabDisplay = document.createElement('div');
	tabDisplay.className = 'tabDisplay';
	document.querySelector('.mainInfo').appendChild(tabDisplay);
};

export {
	loadpage,
}