function Toggle(){
const toggle = document.querySelector('.toggle-button');
toggle.classList.toggle('toggle-active');

const bodyChange = document.querySelector('body');

setTimeout(() => {
    bodyChange.classList.toggle('add-black');
}, 500);
}