import {loadpage} from './page-load.js';
import {aboutus} from './aboutus.js';
import {contact} from './contact.js';
import {menu} from './menu.js';
import './styles.css';

loadpage();

document.querySelector('.aboutusTab').addEventListener("click", aboutus);
document.querySelector('.menuTab').addEventListener("click", menu);
document.querySelector('.contactTab').addEventListener("click", contact);

aboutus();