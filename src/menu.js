const menu = () => {
	const display = document.querySelector('.tabDisplay');
	display.innerHTML = '';

	const title = document.createElement('div');
	display.appendChild(title);
	title.innerHTML = "Menu"
	title.style.fontWeight = "bold";
	title.style.textDecoration = "underline";
	title.style.fontSize = '2rem';
	title.style.paddingTop = '30px';
	title.style.paddingBottom = '70px';
	title.style.textAlign = 'center';

	const menu = document.createElement('div');
	menu.id = 'menu';
	display.appendChild(menu);

	menu.style.lineHeight = '2';
	menu.style.fontSize = '1.5rem';

	let menuItems = {'Coffee': '../src/assets/images/coffee.jpg',
					 'Salad': '../src/assets/images/salad.jpg',
					 'Sandwich': '../src/assets/images/sandwich.jpg'};

	const ul = document.createElement('ul');

	document.getElementById('menu').appendChild(ul);

	Object.keys(menuItems).forEach( (item) => {
		let li = document.createElement('li');
	    ul.appendChild(li);
	    li.style.textAlign = 'center';
	    li.innerHTML += item;

	    let img = document.createElement('img');
	    img.src = menuItems[item];
	    img.style.display = 'block';
	    img.style.margin = 'auto';
	    img.style.width = '150px';
	    img.style.height = '150px';
	    img.style.borderRadius = '50%';
	    li.appendChild(img);
	});
};

export {
	menu,
}