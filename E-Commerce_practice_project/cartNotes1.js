//remove buttons
const removeCartItemButtons = document.getElementsByClassName('delete-btn'); //collect all delete-btn
// console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];                                 //every single unit
    button.addEventListener('click', function(event) {
        // console.log('click123');
        const buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateCartTotal();
    })
}

//quantity
const quantityInputs = document.getElementsByClassName('item-quantity');
for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener('change',function(event) {
        const input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal();
    })
}

//add buttons
const addToCartButtons = document.getElementsByClassName('add-btn');
for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener('click', function(event) {
        const button = event.target;
        const shopItem = button.parentElement;
        // console.log(shopItem);
        var image = shopItem.getElementsByClassName('shop-item-image')[0].src;
        var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
        var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
        // console.log(image, title, price);
        addItemToCart(image, title, price);
        updateCartTotal();
    })
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
            <h3>${title}</h3>
            <span class="item-price">${price}</span>
            <input class="item-quantity" type="number" value="1" min="1" max="100" name="" id="">
        </div>    
        <i class='bx bxs-trash-alt delete-btn'></i>
    `;
    cartRow.innerHTML = cartRowContents;
    cart.append(cartRow);
    cartRow.getElementsByClassName('delete-btn').addEventListener('click', removeCartItemButtons);
    cartRow.getElementsByClassName('item-quantity').addEventListener('change', quantityInputs);
}

//update
function updateCartTotal() {
    const cartItems = document.getElementsByClassName('cart-item');
    var total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const priceElement = cartItem.getElementsByClassName('item-price')[0];
        const quantityElement = cartItem.getElementsByClassName('item-quantity')[0];
        // console.log(priceElement, quantityElement);
        const price = parseFloat(priceElement.innerText.replace('$',''));
        const quantity = quantityElement.value;
        // console.log(price * quantity);
        total = total + (price * quantity);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = total;
}