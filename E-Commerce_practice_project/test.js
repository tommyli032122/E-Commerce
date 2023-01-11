// const shopItemsTitle = document.querySelectorAll('.shop-item-title');
// console.log(shopItemsTitle);
// shopItemsTitle.forEach((title) => {
//     console.log(title);
// });


// document.querySelectorAll('.shop-item-title').forEach((title) => {
//     console.log(title);
// });


// let x = ['1', '2', '3'];
// x.forEach((item) =>{
//     console.log(item);
// })


// let shopItemTitles = document.getElementsByClassName('shop-item-title');
// for (let i = 0; i < shopItemTitles.length; i++) {
//     let title = shopItemTitles[i];
//     var titleText = title.textContent.toLowerCase();
//     console.log(title);
// }

// function purchaseClicked1(event) {
//     const cartItems = document.getElementsByClassName('cart-item');
//         for (let i = 0; i < cartItems.length; i++) {
//         const cartItem = cartItems[i];
//         let title = cartItem.getElementsByClassName('cart-item-title')[0].innerText;
//         let price = cartItem.getElementsByClassName('cart-item-price')[0].innerText;
//         let quantity = cartItem.getElementsByClassName('cart-item-quantity')[0].value;
//         // let total = cartItem.getElementsByClassName('cart-total-price')[0].innerText;
//         async (event) => {
//             event.preventDefault();
//             console.log("1234567");
//             const data = {
//               title: title,
//               price: price,
//               quantity: quantity,
//             //   total: total,
//             }
          
//             await fetch('http://localhost:3000/posts', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify(data)
//             })
          
//             window.location.replace('/');
//         }
//     }
// }