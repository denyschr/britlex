const btn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const btnLink = document.querySelector('.header__btn-link');
const body = document.querySelector('body');

btn.addEventListener('click', ()=>{
	btn.classList.toggle('menu-open');
	menu.classList.toggle('menu-open');
	btnLink.classList.toggle('menu-open');
	body.classList.toggle('lock');
});