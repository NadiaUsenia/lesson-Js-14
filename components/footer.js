export default class Footer {
    constructor(){

    }

    creat() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        const element = document.querySelector('.app');
        element.appendChild(footer);
    }

    draw() {
        const logoWrapper = document.createElement('div');
        logoWrapper.classList.add('logo-wrapper');
        const footer = document.querySelector('.footer');
        footer.appendChild(logoWrapper);
        const logoImg = new Image(200, 200);
        logoImg.src = 'https://thumbs.dreamstime.com/b/%D0%B8%D0%BD%D1%82…D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-192442278.jpg';
        logoWrapper.appendChild(logoImg);
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        const contacts = document.createElement('strong');
        contacts.innerText = 'Our adress: Minsk';
        contactInfo.appendChild(contacts);
        footer.appendChild(contactInfo);
    }

    init() {
        this.creat();
        this.draw();
    }
}
    