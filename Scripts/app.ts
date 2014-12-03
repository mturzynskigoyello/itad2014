angular.module("ShoppingCart", [])
    .service("shoppingCartService", Services.ShoppingCartService)
    .controller("shoppingCartController", Controllers.ShoppingCartController);