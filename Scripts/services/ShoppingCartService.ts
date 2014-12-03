module Services {

    export interface IShoppingCartService {
        getCartItems(): Models.ShoppingCartProduct[];
    }

    export class ShoppingCartService implements IShoppingCartService {

        public getCartItems(): Models.ShoppingCartProduct[] {
            return [
                new Models.ShoppingCartProduct("E-book reader", 50),
                new Models.ShoppingCartProduct("Bicycle", 150),
                new Models.ShoppingCartProduct("Camera", 20.25),
                new Models.ShoppingCartProduct("Headphones", 10.80)
            ];
        }
    }
} 