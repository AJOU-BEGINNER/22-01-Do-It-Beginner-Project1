'use strict';

const $logInBtn = document.querySelector('.navbar__logInBtn');
const $navBarMenu = document.querySelector('.navbar__menu');
const $toggleBtn = document.querySelector('.navbar__toggleBtn');

$toggleBtn.addEventListener('click',()=>{
  $navBarMenu.classList.toggle('active');
  $logInBtn.classList.toggle('active');
});