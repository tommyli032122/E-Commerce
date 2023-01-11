if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    //remove buttons
    const removeCartItemButtons = document.getElementsByClassName('delete-btn'); 
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        const button = removeCartItemButtons[i];                                 
        button.addEventListener('click', removeCartItem);
    }
    //quantity
    const quantityInputs = document.getElementsByClassName('item-quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener('change',quantityChanged);
    }
    //add buttons
    const addToCartButtons = document.getElementsByClassName('add-btn');
    for (let i = 0; i < addToCartButtons.length; i++) {
        const button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
    //purchase button
    document.getElementsByClassName('purchase-btn')[0].addEventListener('click', purchaseClicked1);
    // document.getElementsByClassName('purchase-btn')[0].addEventListener('click', purchaseClicked2);
}
//remove buttons
function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}
//quantity
function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}
//add buttons
function addToCartClicked(event) {
    const button = event.target;
    const shopItem = button.parentElement;
    let image = shopItem.getElementsByClassName('shop-item-image')[0].src;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    addItemToCart(image, title, price);
    updateCartTotal();
}

function addItemToCart(image, title, price) {
    const cart = document.getElementsByClassName('cart-items')[0];
    const cartRow = document.createElement('div');
    cartRow.classList.add("cart-item");

    const cartItemsName = cart.getElementsByClassName('cart-item-title');
    for (let i = 0; i < cartItemsName.length; i++) {
        if (cartItemsName[i].innerText == title) {
            alert('This item is already added to the cart!')
            return
        }
    }
    const cartRowContents = `
        <img src="${image}" alt="">
        <div class="cart-item-text">
            <h3 class="cart-item-title">${title}</h3>
            <span class="cart-item-price">${price}</span>
            <input class="cart-item-quantity" type="number" value="1" min="1" max="100" name="" id="">
        </div>    
        <i class='bx bxs-trash-alt delete-btn'></i>
    `;
    cartRow.innerHTML = cartRowContents;
    cart.append(cartRow);
    cartRow.getElementsByClassName('delete-btn')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-item-quantity')[0].addEventListener('change', quantityChanged);
}

//update
function updateCartTotal() {
    const cartItems = document.getElementsByClassName('cart-item');
    let total = 0;
    let totalItems = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const priceElement = cartItem.getElementsByClassName('cart-item-price')[0];
        const quantityElement = cartItem.getElementsByClassName('cart-item-quantity')[0];
        const price = parseFloat(priceElement.innerText.replace('$',''));
        const quantity = quantityElement.value;
        total = total + (price * quantity);
        totalItems = totalItems + (1 * quantity);
    }
    // console.log(totalItems);
    document.getElementsByClassName('cart-total-price')[0].innerText = total;
    document.getElementsByClassName('total-cart-items')[0].innerText = totalItems;
}

//purchaseClicked1
async function purchaseClicked1() {
    
    const cartItems = document.getElementsByClassName('cart-item');
    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const title = cartItem.getElementsByClassName('cart-item-title')[0].innerText;
        const price = cartItem.getElementsByClassName('cart-item-price')[0].innerText;
        const quantity = cartItem.getElementsByClassName('cart-item-quantity')[0].value;

        const data = {
        title: title,
        price: price,
        quantity: quantity,
        }
            
        await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        
        window.location.replace('/');
    }
}

//purchaseClicked2
// function purchaseClicked() {
//     alert('Thank you for your purchase!');
//     const cartItems = document.getElementsByClassName('cart-items')[0];
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild);
//     }
//     updateCartTotal();
// }