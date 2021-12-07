import { CONTAINER, getCookie, setCookie, openModal } from "../index";

export default class Main {
    constructor (){

    }
    create() {
        const main = document.createElement('main');
        main.classList.add('main');
        CONTAINER.appendChild(main);
        const element = document.querySelector('.app');
        element.appendChild(CONTAINER);
    }

    mainDraw() {
        
        const CONTAINER = document.querySelector('.container')
        CONTAINER.innerHTML = '';
        CONTAINER.insertAdjacentHTML('afterbegin', `
            <div class="main_wrapper">
                <h1> Welcome to our shop!</h1>
                <img src='../img/2.jpg'>
            </div>
        `)
    
    }

    
    productCard = (data) => {
        let counter = 1;

        const block = document.createElement('section');
        const descBlock = document.createElement('div')
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('modal-image-block');
        const img = new Image(150);
        img.src = data.image;
        imgWrapper.appendChild(img);
        const title = document.createElement('h2');
        title.innerText = data.title;
        const desc = document.createElement('p');
        desc.innerText = data.description;
        const counterBlock = document.createElement('div');
        counterBlock.classList.add('counter-block');
        const countMinus = document.createElement('span');
        countMinus.innerText = '-';
        const countPlus = document.createElement('span');
        countPlus.innerText = '+';
        const countText = document.createElement('strong');
        countText.innerText = counter;
        countMinus.addEventListener('click', () => {
            if (counter > 1) {
                counter--;
                countText.innerText = counter;
            
            }
        });
        countPlus.addEventListener('click', () => {counter++; countText.innerText = counter;})
        counterBlock.appendChild(countMinus);
        counterBlock.appendChild(countText);
        counterBlock.appendChild(countPlus);

        const btnAdd = document.createElement('button');
        btnAdd.classList.add('btnADD');
        btnAdd.innerText = 'Add to cart';

    
        btnAdd.addEventListener('click', () => {
            const cartList = getCookie('cart') || [];
            if(cartList?.find(item => item.id === data.id)) {
                alert('This product is the cart already')
            } else {
            
                cartList.push({
                    id: data.id,
                    count: counter
                })
                setCookie('cart', cartList);
                
            }
            
            
        })
        block.appendChild(imgWrapper);
        block.appendChild(descBlock);
        block.appendChild(counterBlock);
        block.appendChild(btnAdd);
        return block;
}

    products = async (data) => {
        CONTAINER.innerHTML = '';
        CONTAINER.insertAdjacentHTML('afterbegin', `
            <h1> Products </h1>
        `)
        const cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards-wrapper');
        let products;
        if(localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
        } else {
            const response = await fetch('https://fakestoreapi.com/products');
            products = await response.json();
    
            localStorage.setItem('products', JSON.stringify(products));
        }
    
        await products.map((item) => {
            const cardItem = document.createElement('div');
            cardItem.classList.add('card')
            const imgItem = new Image(300);
            imgItem.src = item.image;
            const title = document.createElement('h3');
            title.innerText = item.title;
            const price = document.createElement('strong');
            price.innerText = item.price;
            cardItem.appendChild(imgItem);
            cardItem.appendChild(title);
            cardItem.appendChild(price);
            cardItem.addEventListener('click', () => {
                location.hash = `#products/${item.id}`;
            });
            cardsContainer.appendChild(cardItem);
        })
        CONTAINER.appendChild(cardsContainer)
    
        if(location.hash !== '#products') {
            const productId = location.hash.replace('#products/', '');
            const product = products.find((item) => item.id == productId)
            console.log(product);
            if(product) {
                const productHtml = this.productCard(product, data.cartList);
                openModal(productHtml);
               
            } else {
                alert('Sorry, we can not find this product')
            }
        }
    }


    getTotalPrice = (products) => {
        const cart = getCookie('cart');
        let total = 0;
        cart.map(item => {
            const currentProduct = products.find(product => product.id === item.id);
            total+=currentProduct.price*item.count;
        })
        return total.toFixed(2);
    }
    
    cart = (data) => {
        CONTAINER.innerHTML = '';
        CONTAINER.insertAdjacentHTML('afterbegin', `
            <h1> Cart </h1>
        `)
        const totalPrice = document.createElement('strong');
        totalPrice.classList.add('total-price');
        const products = JSON.parse(localStorage.getItem('products'));
        const cartList = getCookie('cart');
        cartList?.map(cartItem => {
            const currentProduct = products.find(item => item.id === cartItem.id);
            console.log(currentProduct);
            const counterBlock = document.createElement('div');
            counterBlock.classList.add('counter-block');
            const countMinus = document.createElement('span');
            countMinus.innerText = '-';
            const countPlus = document.createElement('span');
            countPlus.innerText = '+';
            const countText = document.createElement('strong');
            countText.innerText = cartItem.count;
            countMinus.addEventListener('click', () => {
                if (cartItem.count > 1) {
                    cartItem.count--;
                    countText.innerText = cartItem.count;
                    price.innerHTML = (cartItem.count*currentProduct.price).toFixed(2);
                    setCookie('cart', cartList);
                    totalPrice.innerText = 'Total price ' + this.getTotalPrice(products);
                }
            });
            countPlus.addEventListener('click', () => {
                cartItem.count++; 
                countText.innerText = cartItem.count;
                price.innerHTML = (cartItem.count*currentProduct.price).toFixed(2);
                setCookie('cart', cartList);
                totalPrice.innerText = 'Total price ' + this.getTotalPrice(products);
            })
            counterBlock.appendChild(countMinus);
            counterBlock.appendChild(countText);
            counterBlock.appendChild(countPlus);

            const title = document.createElement('h2');
            title.innerHTML = currentProduct.title;
            
            const price = document.createElement('strong');
            price.innerHTML = cartItem.count*currentProduct.price;
            
            const imgItem = new Image(300);
            imgItem.src = currentProduct.image;
            
            const desc = document.createElement('p');
            desc.innerHTML = currentProduct.description;

            const cartWrapper = document.createElement('div');
            cartWrapper.classList.add('cartWrapper');
            const btnCartWrapper = document.createElement('div');
            btnCartWrapper.classList.add('btnCartWrapper');
            CONTAINER.appendChild(title);
            cartWrapper.appendChild(imgItem);
            cartWrapper.appendChild(price);
            cartWrapper.appendChild(desc);
            btnCartWrapper.appendChild(counterBlock)
            CONTAINER.appendChild(cartWrapper);
            CONTAINER.appendChild( btnCartWrapper)
    
            const btnRemove = document.createElement('button');
            btnRemove.classList.add('remove');
            btnRemove.innerText = 'Remove this item';
            btnRemove.addEventListener('click', () => {
                const filteredCartList = cartList.filter(item => item.id !== cartItem.id);
                setCookie('cart', filteredCartList);
                this.cart(data);
            })
            btnCartWrapper.appendChild(btnRemove);
            totalPrice.innerText = 'Total price ' + this.getTotalPrice(products);
            CONTAINER.appendChild(totalPrice);
        })
        
    }

    init() {
        this.create();
        
    }

    

}