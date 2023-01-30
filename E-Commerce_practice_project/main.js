//icon
let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    user.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

// window.onscroll = () => {
//     search.classList.remove('active');
//     cart.classList.remove('active');
//     user.classList.remove('active');
//     navbar.classList.remove('active');
// }

//search-box
document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {
    const searchInput = document.querySelector('#search-input');
    const filterText = searchInput.value.toLowerCase();
    const shopItemsTitle = document.querySelectorAll('.shop-item-title');

    shopItemsTitle.forEach((itemTitle) => {
        let text = itemTitle.textContent.toLowerCase();
        if (text.includes(filterText)) {
            itemTitle.parentElement.parentElement.style.display = '';
        } else {
            itemTitle.parentElement.parentElement.style.display = 'none';
        }
    })
}


//search-box
//  
// let searchBox1 = document.getElementById('search');
// let searchBox = searchBox1.querySelector('input');
// searchBox.addEventListener('keyup', (e) => {
//     let term = e.target.value.toLowerCase();
    
//         if (titleText.includes(term) != -1) {
//             title.parentElement.parentElement.style.display = 'flex';
//         } else {
//             title.parentElement.parentElement.style.display = 'none';
//         }
//     }
// )
// let text = "21346789";
// if(text.indexOf(9) != -1){
//     console.log('ok');
// }