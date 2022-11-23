//mobile navbar
const ham_menu = document.querySelector(".mobile_menu_icon");
const nav_items = document.querySelector(".navbar_items");
const nav_link = document.querySelectorAll(".link_item");
const addBtn = document.querySelectorAll(".add_to_cart");
const table_Body = document.getElementById("tbody");
// const product_Name = document.querySelector(".product_name");
// const product_price = document.querySelectorAll(".price");
const products = document.querySelectorAll(".product");
const buttons = document.querySelectorAll(".filterBtn");

ham_menu.addEventListener("click", function () {
  nav_items.classList.toggle("active");
});

nav_link.forEach((element) => {
  element.addEventListener("click", function () {
    nav_items.classList.remove("active");
  });
});

function allProducts() {
  document.querySelector(".all_products").classList.add("checked");
}

function catProducts() {
  document.querySelector(".cat_products").classList.add("checked");
  $(".product").hide();
  $(".product.cat").show();
}
function dogProducts() {
  document.querySelector(".dog_products").classList.add("checked");
  $(".product").hide();
  $(".product.dog").show();
}
function petAccessories() {
  document.querySelector(".pet_accessories").classList.add("checked");
  $(".product").hide();
  $(".product.accessories").show();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("dog_products")) {
      $(".product").hide();
      $(".product.dog").show();
    } else if (btn.classList.contains("cat_products")) {
      $(".product").hide();
      $(".product.cat").show();
    } else if (btn.classList.contains("pet_accessories")) {
      $(".product").hide();
      $(".product.accessories").show();
    } else {
      $(".product").show();
    }
  });
});

addBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    addToCart(event);

    removeItems();
  });
});
let itemsNum = 0;
function addToCart(event) {
  itemsNum++;
  var clickedBtn = event.target;
  var shopItems = clickedBtn.parentElement.parentElement;
  var product_Name =
    shopItems.parentElement.getElementsByClassName("product_name")[0].innerText;
  var product_price = shopItems.getElementsByClassName("price")[0].innerText;

  const table_row = document.createElement("tr");
  table_row.innerHTML = `<tr>
<th scope="row">${itemsNum}</th>
<td>${product_Name}</td>
<td>
<div class="quantity">
<button class="minus-btn" type="button" name="button">
<img src="./images/subtract.png" alt="plus">
</button>
<input type="text" name="name" value="1" id="qtyInput">
<button class="plus-btn" type="button" name="button">
<img src="./images/plus.png" alt="plus">
</button>
</div>
</td>
<td>${product_price}</td>
<td>
<button class="remove_btn">
<img src="https://img.icons8.com/material-sharp/22/null/delete.png"/>
</button>
</td>
</tr>`;

  table_Body.appendChild(table_row);

  quantity();
}

function quantity() {
  var quantityInput = document.getElementById("qtyInput");
  var plusBtn = document.querySelector(".plus-btn");
  var minusBtn = document.querySelector(".minus-btn");

  plusBtn.addEventListener("click", function () {
    quantityInput.value++;
  });
  minusBtn.addEventListener("click", function () {
    if (quantityInput.value > 1) {
      quantityInput.value--;
    }
  });
}
function removeItems() {
  var removeBtn = document.getElementsByClassName("remove_btn");

  for (var i = 0; i < removeBtn.length; i++) {
    var button = removeBtn[i];
    button.addEventListener("click", function (event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.parentElement.remove();
    });
  }
}
