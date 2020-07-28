let menu = document.querySelector('.menu');
let menuDiv = document.querySelector('.menu-div');
let exit = document.querySelector('.exit-btn');
let menuWrapper = document.querySelector('menubar-wrapper');

menu.addEventListener('click', showMenu);
exit.addEventListener('click', closeMenu);

function showMenu(){
    menuDiv.classList.remove('hide');
}
function closeMenu(){
    menuDiv.classList.add('hide');
} 