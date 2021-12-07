

export default class Header {
    constructor() {

    }
    creat() {
        const header = document.createElement('header');
        header.classList.add('header');
        const element = document.querySelector('.app');
        element.appendChild(header);
    }

    draw() {
        const logoWrapper = document.createElement('div');
        logoWrapper.classList.add('logo-wrapper');
        const header = document.querySelector('.header');
       
        const logoImg = new Image(200, 200);
        logoImg.src = 'https://thumbs.dreamstime.com/b/%D0%B8%D0%BD%D1%82…D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-192442278.jpg';
        logoWrapper.appendChild(logoImg);
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        const contacts = document.createElement('strong');
        contacts.innerText = 'Contacts';
        contactInfo.appendChild(contacts);
        header.appendChild(contactInfo);
        header.appendChild(logoWrapper);
    }

    init() {
        this.creat();
        this.draw();
    }
}