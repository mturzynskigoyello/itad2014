var Services;
(function (Services) {
    var ShoppingCartService = (function () {
        function ShoppingCartService() {
        }
        ShoppingCartService.prototype.getCartItems = function () {
            return [
                new Models.ShoppingCartProduct("E-book reader", 50),
                new Models.ShoppingCartProduct("Bicycle", 150),
                new Models.ShoppingCartProduct("Camera", 20.25),
                new Models.ShoppingCartProduct("Headphones", 10.80)
            ];
        };
        return ShoppingCartService;
    })();
    Services.ShoppingCartService = ShoppingCartService;
})(Services || (Services = {}));
//# sourceMappingURL=ShoppingCartService.js.map
