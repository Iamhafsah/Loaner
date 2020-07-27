let menu = document.querySelector('.menu');
let menudiv = document.querySelector('.menu-div');

menu.addEventListener('click', showMenu);

function showMenu(){
    menudiv.classList.toggle('hide');
}