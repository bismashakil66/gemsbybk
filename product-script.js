const products = [
  { id: 1, name: "Rose Gold Ring", price: 1500, image: "rose.jpeg" },
  { id: 2, name: "Pearl Necklace", price: 2500, image: "pearl.avif" },
  { id: 3, name: "Silver Studs", price: 1200, image: "stud.jpeg" },
  { id: 4, name: "Kundan Earrings", price: 1800, image: "kundan.avif" },
  { id: 5, name: "Beaded Bracelet", price: 900, image: "beaded.avif" },
  { id: 6, name: "Vintage Choker", price: 3000, image: "choker.jpeg" },
  { id: 7, name: "Anklet Set", price: 800, image: "anklet.avif" },
  { id: 8, name: "Mirror Jhumkas", price: 1100, image: "mirror.jpg" },
  { id: 9, name: "Statement Ring", price: 1600, image: "ring.jpg" },
  { id: 10, name: "Elegant Set", price: 3500, image: "set.jpg" },
];

let cart = [];

$(document).ready(function () {
  const $productList = $("#product-list");

  products.forEach((item) => {
    const card = `
      <div class="col-md-4 col-lg-3">
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Rs. ${item.price}</p>
            <button class="btn btn-maroon mt-2 add-to-cart" data-id="${item.id}">Add to Cart</button>
          </div>
        </div>
      </div>`;
    $productList.append(card);
  });

  // Toggle Cart
  $("#cartBtn").click(() => {
    $("#cartPanel").addClass("open");
  });

  $("#closeCart").click(() => {
    $("#cartPanel").removeClass("open");
  });

  // Add to Cart
  $(document).on("click", ".add-to-cart", function () {
    const id = $(this).data("id");
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
  });

  function updateCart() {
    const $cartItems = $("#cartItems");
    $cartItems.empty();
    if (cart.length === 0) {
      $cartItems.html(`<p class="text-muted">Cart is empty.</p>`);
    } else {
      cart.forEach((item, index) => {
        $cartItems.append(`
          <div class="d-flex justify-content-between align-items-center border-bottom py-2">
            <div>
              <strong>${item.name}</strong><br>
              <small>Rs. ${item.price}</small>
            </div>
            <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">&times;</button>
          </div>
        `);
      });
    }
  }

  // Remove from cart
  $(document).on("click", ".remove-item", function () {
    const index = $(this).data("index");
    cart.splice(index, 1);
    updateCart();
  });
});
