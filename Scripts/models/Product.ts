module Models {

    export class Product {
        name: string;
        price: number;
    }

    export class ShoppingCartProduct extends Product {
        quantity: number;

        constructor(name: string, price: number) {
            super();
            this.name = name;
            this.price = price;
            this.quantity = 0;
        }
    }
} 