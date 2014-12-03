var Controllers;
(function (Controllers) {
    var ShoppingCartController = (function () {
        function ShoppingCartController(shoppingCartService) {
            this.products = shoppingCartService.getCartItems();
        }
        Object.defineProperty(ShoppingCartController, "maxQuantity", {
            get: function () {
                return 10;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ShoppingCartController, "minQuantity", {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });

        ShoppingCartController.prototype.increaseQuantity = function (product) {
            if (product.quantity < ShoppingCartController.maxQuantity) {
                product.quantity++;
            }
        };

        ShoppingCartController.prototype.decreaseQuantity = function (product) {
            if (product.quantity > ShoppingCartController.minQuantity) {
                product.quantity--;
            }
        };

        ShoppingCartController.prototype.clear = function () {
            this.products.forEach(function (product) {
                product.quantity = 0;
            });
        };

        Object.defineProperty(ShoppingCartController.prototype, "totalValue", {
            get: function () {
                var productsPrices = this.products.map(function (product) {
                    return product.price * product.quantity;
                });
                return productsPrices.reduce(function (previous, current) {
                    return previous + current;
                });
            },
            enumerable: true,
            configurable: true
        });
        return ShoppingCartController;
    })();
    Controllers.ShoppingCartController = ShoppingCartController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=ShoppingCartController.js.map
