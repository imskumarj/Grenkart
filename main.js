document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('google-login')?.addEventListener('click', googleLogin);

    function googleLogin() {
        console.log('Google Login Clicked');
    }

    const addProductForm = document.getElementById('add-product-form');
    addProductForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        alert(`Product Added: ${productName}, Price: ${productPrice}`);
    });
});
