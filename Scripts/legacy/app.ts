$(document).ready(function () {
    var products = [
        {
            name: "E-book reader",
            price: 50,
            quantity: 0
        },
        {
            name: "Bicycle",
            price: 150,
            quantity: 0
        },
        {
            name: "Camera",
            price: 20.25,
            quantity: 0
        },
        {
            name: "Headphones",
            price: 10.80,
            quantity: 0
        }
    ];
    
    var $shoppingCartItems = $("#shopping-cart-items");

    function getProductPrice(product) {
        var price = product.price + " * " + product.quantity + " = " + product.price * product.quantity;
        return price;
    }

    function updateTotalPrice() {
        var productsPrices = products.map(function(product) { return product.price * product.quantity; });
        var total = productsPrices.reduce(function (previous, current) { return previous + current; });

        $("#shopping-cart-total-value").html(total.toString());
    }

    function renderProducts() {

        products.forEach(function (product) {
            var name = product.name;
            var price = getProductPrice(product);
            var actions = '<button type="button" class="btn-decrease btn btn-default">-</button> ' +
                '<button type="button" class="btn-increase btn btn-default">+</button>';

            var $product = $('<div class="product-row row mt-10"><div class="col-md-4">'
                + name + '</div><div class="product-value col-md-4">'
                + price + '</div><div class="col-md-4">'
                + actions + '</div></div>');

            $product.find("button.btn-increase").click(function(eventData) {
                var $productValue = $(eventData.target).parents(".product-row").children(".product-value")[0];
                product.quantity++;
                $productValue.innerHTML = getProductPrice(product);
                updateTotalPrice();
            });

            $product.find("button.btn-decrease").click(function(eventData) {
                var $productValue = $(eventData.target).parents(".product-row").children(".product-value")[0];
                product.quantity--;
                $productValue.innerHTML = getProductPrice(product);
                updateTotalPrice();
            });

            $shoppingCartItems.append($product);
        });
    }

    renderProducts();
    updateTotalPrice();

    $("#shopping-cart-clear-button").click(function () {

        products.forEach(function(product) {
            product.quantity = 0;
        });

        $shoppingCartItems.html("");
        renderProducts();
        updateTotalPrice();
    });
});