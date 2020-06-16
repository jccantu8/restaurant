const contact = () => {
	const display = document.querySelector('.tabDisplay');
	display.innerHTML = '';

	const title = document.createElement('div');
	display.appendChild(title);
	title.innerHTML = "Contact"
	title.style.fontWeight = "bold";
	title.style.textDecoration = "underline";
	title.style.fontSize = '2rem';
	title.style.paddingTop = '30px';
	title.style.paddingBottom = '70px';
	title.style.textAlign = 'center';

	const contactInfo = document.createElement('div');
	contactInfo.id = 'contactInfo';
	display.appendChild(contactInfo);

	contactInfo.style.lineHeight = '2';
	contactInfo.style.fontSize = '1.5rem';

	let contactPoints = [
        'Telephone: 1-234-568-7899',
        'Email: odincafe@notarealemail.com',
        'Fax: 555-555-5555',
    ];

    const ul = document.createElement('ul');

	document.getElementById('contactInfo').appendChild(ul);

	contactPoints.forEach(function (point) {
	    let li = document.createElement('li');
	    ul.appendChild(li);

	    li.innerHTML = point;
	});
};

export {
	contact,
}