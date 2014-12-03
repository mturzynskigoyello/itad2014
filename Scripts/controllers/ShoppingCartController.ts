module Controllers {
    
    export class ShoppingCartController {

        public products: Models.ShoppingCartProduct[];

        constructor(shoppingCartService: Services.IShoppingCartService) {
            this.products = shoppingCartService.getCartItems();
        }

        private static get maxQuantity(): number {
            return 10;
        }

        private static get minQuantity(): number {
            return 0;
        }

        public increaseQuantity(product: Models.ShoppingCartProduct): void {
            if (product.quantity < ShoppingCartController.maxQuantity) {
                product.quantity++;
            }
        }

        public decreaseQuantity(product: Models.ShoppingCartProduct): void {
            if (product.quantity > ShoppingCartController.minQuantity) {
                product.quantity--;
            }
        }

        public clear(): void {
            this.products.forEach((product: Models.ShoppingCartProduct) => {
                product.quantity = 0;
            });
        }

        public get totalValue(): number {
            var productsPrices = this.products.map((product: Models.ShoppingCartProduct) => product.price * product.quantity);
            return productsPrices.reduce((previous: number, current: number) => previous + current);
        }  
        
    }
} 