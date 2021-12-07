export const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');


import App from './components/app.js'
import Header from './components/header.js'
import Nav from './components/nav.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
const myApp = new App();
myApp.init();
const headerApp = new Header();
headerApp.init();
const navApp = new Nav();
navApp.init();
const data = navApp.data;
const mainApp = new Main();
mainApp.init();
const footerApp = new Footer();
footerApp.init();

if(location.hash === '') {
    mainApp.mainDraw();
} else {
    checkHash();
}



export function checkHash() {
    const hash = location.hash;
    console.log(hash);

    if(hash === '#cart') {
        mainApp.cart(data); 
    } else {
        if (hash === '#main') {
            mainApp.mainDraw();
        } else {
            if(hash.includes('#products')){
                mainApp.products(data);
            }
        }
    }
}

window.addEventListener('hashchange', checkHash);
export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        const value = c.substring(name.length, c.length)
        return JSON.parse(value);
      }
    }
    return "";
}

export function setCookie(cname, cvalue, exdays = 10) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
}


export function openModal(htmlElement) {
    // modalWindow.style.display = 'flex';
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-wrapper">
        <div class="modal-box">
            <span class="close">x</span>
            <h1>Your choice</h1>
            
        </div>
    </div>
    `)
    const modalBox = document.querySelector('.modal-box');
    modalBox.appendChild(htmlElement);
    const close = document.querySelector('.close');
    close.addEventListener('click', closeModal);
}

 export function closeModal() {
    // modalWindow.style.display = 'none';
    const modalWindow = document.querySelector('.modal-wrapper');
    modalWindow.remove();
    location.hash = `#products`;
}