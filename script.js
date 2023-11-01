/* var firstName = document.querySelector("#firstname");
var lastName = document.querySelector("#lastname");
var emailbox = document.querySelector("#emailbox1");
var message = document.querySelector("#message");
var firstinput = firstName.value;
var lastinput = lastName.value;
var emailinput = emailbox.value;
var messageinput = message.value;
function smsg() {
    if (firstinput != "" && lastinput != "" && emailinput !="" && messageinput !="") {
        if (emailbox != '' && typeof (emailbox) == "string") {
            if (emailbox.includes("@") && emailbox.includes('.')) {
                Swal.fire('Success',"valid email", 'success');
            } else {
                Swal.fire('invalid',"invalid email", 'error');
            }
    }
         Swal.fire('Success',"Message sent", 'success');

    
}
else{
    Swal.fire('invalid',"fields are empty", 'error');
}
} */
function smsg() {
    var firstName = document.querySelector("#firstname").value;
    var lastName = document.querySelector("#lastname").value;
    var emailbox = document.querySelector("#emailbox1").value;
    var message = document.querySelector("#message").value;

    if (firstName != "" && lastName != "" && emailbox != "" && message != "") {
            if (emailbox.includes("@") && emailbox.includes('.')) {
                Swal.fire('Success', "message sent", 'success');
            } else {
                Swal.fire('Invalid', "Invalid email", 'error');
            }
    } else {
        Swal.fire('Invalid', "Fields are empty", 'error');
    }
}
 
    // Initialize the cart as an empty array or retrieve the existing cart from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Function to add an item to the cart
    function addToCart(productName, productPrice, productImage) {
      const item = { name: productName, price: productPrice, image: productImage };
      cart.push(item);
  
      // Update the cart in local storage
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    // Attach a click event to "Add to Cart" buttons to add items to the cart
    document.addEventListener('DOMContentLoaded', function () {
      const addToCartButtons = document.querySelectorAll('.btn2');
  
      addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
          const productName = document.querySelectorAll('.product-title')[index].textContent;
          const productPrice = document.querySelectorAll('.product-price')[index].textContent;
          const productImage = document.querySelectorAll('.img-fluid')[index].src;
          addToCart(productName, productPrice, productImage);
          Swal.fire( 'Success', 'Item added to the cart','success');
        });
      });
    });



    // Retrieve the cart from local storage
    let cart1 = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Function to display cart items
    function displayCart() {
      const cartItems = document.getElementById('cart-items');
  
      if (cart1 && cart1.length > 0) {
        cartItems.innerHTML = ''; // Clear the cart items before re-rendering
  
        cart1.forEach((item, index) => {
          const itemRow = document.createElement('tr');
          itemRow.innerHTML = `
            <td><img src="${item.image}" class="product-thumbnail" alt="Product Image"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>1</td>
            <td>${item.price}</td>
            <td><button class="btn-remove" data-index="${index}">Remove</button></td>
          `;
  
          cartItems.appendChild(itemRow);
        });
      } else {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
      }
    }
  
    // Function to remove an item from the cart
    function removeFromCart(index) {
      cart.splice(index, 1); // Remove the item from the cart array
      localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in local storage
      displayCart(); // Re-display the cart
    }
  
    // Display the cart when the page loads
    document.addEventListener('DOMContentLoaded', function () {
      displayCart();
      
      // Add event listeners for "Remove" buttons
      const removeButtons = document.querySelectorAll('.btn-remove');
      removeButtons.forEach((button) => {
        button.addEventListener('click', function () {
          const index = parseInt(button.getAttribute('data-index'));
          removeFromCart(index);
        });
      });
    });
 

 
  
