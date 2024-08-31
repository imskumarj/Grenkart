document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value; 

    console.log('Form submitted:', { email, password, role }); 

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User registered:', userCredential); 
            alert('Registration successful! Please log in.');
            window.location.href = 'login.html'; 
        })
        .catch((error) => {
            console.error('Error registering user:', error);
            alert('Registration failed. Please try again.');
        })
});

// JavaScript for adding, updating, and removing products
let products = [];
let orders = [];

function addProduct() {
    // Prompt the seller to enter product details
    let productName = prompt("Enter product name:");
    let productPrice = prompt("Enter product price:");
    let productImage = prompt("Enter product image URL:");
    let productQuantity = prompt("Enter product quantity:");

    let newProduct = { name: productName, price: productPrice, image: productImage, quantity: productQuantity };
    products.push(newProduct);
    displayProducts();
}

function displayProducts() {
    let productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach((product, index) => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <p><strong>${product.name}</strong></p>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <button onclick="updateProduct(${index})">Update</button>
            <button onclick="removeProduct(${index})">Remove</button>
        `;
        productList.appendChild(productDiv);
    });

    // Show add button only if no products exist
    document.getElementById('add-product-btn').style.display = products.length ? 'none' : 'block';
}

function updateProduct(index) {
    let product = products[index];
    product.name = prompt("Update product name:", product.name);
    product.price = prompt("Update product price:", product.price);
    product.image = prompt("Update product image URL:", product.image);
    product.quantity = prompt("Update product quantity:", product.quantity);
    displayProducts();
}

function removeProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

// JavaScript for managing orders
function addOrder(userName, userAddress, productName, productPrice) {
    let orderNumber = Math.random().toString(36).substring(2, 9);
    let newOrder = { number: orderNumber, userName, userAddress, productName, productPrice, status: 'incomplete' };
    orders.push(newOrder);
    displayOrders();
}

function displayOrders() {
    let ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';

    orders.forEach((order, index) => {
        let orderDiv = document.createElement('div');
        orderDiv.className = 'order';
        orderDiv.innerHTML = `
            <p>Order No: ${order.number}</p>
            <p>User: ${order.userName}</p>
            <p>Address: ${order.userAddress}</p>
            <p>Product: ${order.productName}</p>
            <p>Price: $${order.productPrice}</p>
            <button onclick="markOrder(${index}, 'done')">Mark as Done</button>
            <button onclick="markOrder(${index}, 'incomplete')">Mark as Incomplete</button>
        `;
        if (order.status === 'done') {
            orderDiv.style.textDecoration = 'line-through';
            ordersList.appendChild(orderDiv);
        } else {
            ordersList.insertBefore(orderDiv, ordersList.firstChild);
        }
    });
}

function markOrder(index, status) {
    orders[index].status = status;
    displayOrders();
}
