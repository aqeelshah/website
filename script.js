
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
const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(productName, productPrice, productImage) {
  const item = { name: productName, price: productPrice, image: productImage };
  cart.push(item);

  // Update the cart in session storage
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Attach a click event to "Add to Cart" buttons to add items to the cart
document.addEventListener('DOMContentLoaded', function () {
  var addToCartButtons = document.querySelectorAll('.btn2');

  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      const productName = document.querySelectorAll('.product-title')[index].textContent;
      const productPrice = document.querySelectorAll('.product-price')[index].textContent;
      const productImage = document.querySelectorAll('.img-fluid')[index].src;
      addToCart(productName, productPrice, productImage);
      button.innerHTML = "Item Added";                                         /*  Swal.fire('Success', 'Item added to the cart', 'success'); */
    });
  });
});


// Retrieve the cart from session storage
let cart1 = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to display cart items
function displayCart() {
  const cartItems = document.getElementById('cart-items');

  if (cart1 && cart1.length > 0) {
    cartItems.innerHTML = ''; // Clear the cart items before re-rendering

    cart1.forEach((item, index) => {
      const itemRow = document.createElement('tr');
      itemRow.innerHTML =
        '<td><img src="' + item.image + '" class="product-thumbnail" alt="Product Image"></td>' +
        '<td>' + item.name + '</td>' +
        '<td>' + item.price + '</td>' +
        '<td><input type="number" id="quantity_64ed95c040d00" class="input-text qty text form-control" name="quantity" value="1" aria-label="Product quantity" size="4" min="1" max="" step="1" placeholder="" inputmode="numeric" autocomplete="off" style="max-width: 75px;"></td>' +
        '<td>' + item.price +'</td>' +
        '<td><button class="btn-remove" data-index="' + index + '"><ion-icon name="close"></ion-icon></button></td>';

      cartItems.appendChild(itemRow);
    });
  } else {
   document.querySelector(".table").textContent="Your cart is empty"                              /*  cartItems.innerHTML = '<p>Your cart is empty.</p>'; */
  }


  var totalPriceElement = document.getElementById('total-price');
  var totalPrice = calculateTotalPrice();

  totalPriceElement.textContent = '$' + totalPrice;

}

function calculateTotalPrice() {
  var totalPrice = 0;

  cart1.forEach((item) => {
    // Extract the price from the item and convert it to a number
    const price = parseFloat(item.price.replace('$', '').replace(',', ''));

    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  return totalPrice.toFixed(2);
}


// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item from the cart array
  sessionStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in local storage
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
 function submission(){
  Swal.fire('Success', "Check Out Successfull", 'success');
 }











