document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    let cartCount = 0;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            cartCount++;
            cartButton.textContent = `Cart (${cartCount})`;
        });
    });

    const detailsButtons = document.querySelectorAll('.details-button');
    detailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const details = productCard.querySelector('.product-details');
            
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
    });
});





