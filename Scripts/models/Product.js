var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Models;
(function (Models) {
    var Product = (function () {
        function Product() {
        }
        return Product;
    })();
    Models.Product = Product;

    var ShoppingCartProduct = (function (_super) {
        __extends(ShoppingCartProduct, _super);
        function ShoppingCartProduct(name, price) {
            _super.call(this);
            this.name = name;
            this.price = price;
            this.quantity = 0;
        }
        return ShoppingCartProduct;
    })(Product);
    Models.ShoppingCartProduct = ShoppingCartProduct;
})(Models || (Models = {}));
//# sourceMappingURL=Product.js.map
