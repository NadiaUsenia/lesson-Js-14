import { checkHash } from "../index.js";

export default class App {
    constructor() {

    }

    create() {
        const element = document.createElement('div');
        element.classList.add('app');
        document.body.appendChild(element);
    }
     init() {
         this.create();
     }
}