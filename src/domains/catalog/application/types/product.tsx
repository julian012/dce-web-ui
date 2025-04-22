import {ShoppingCart} from "./shoppingCart.tsx";

export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    product_price: number,
    product_stock: number,
    is_available: boolean
}

export type ProductToCart = {
    product: Product,
    quantity: number
}

export type ProductContextType = {
    products: Product[];
    cart: ShoppingCart[];
    addProductToCart: (addProduct: ProductToCart) => void;
    deleteProductFromCart: (product: Product) => void;
}