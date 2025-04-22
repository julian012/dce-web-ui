import {createContext, ReactNode, useEffect, useState} from "react";
import {
    deleteItemFromCart,
    getProductList,
    getShoppingCartList, postProductToCart
} from "../domains/catalog/presentation/infrastructure/api";
import {Product, ProductContextType, ProductToCart} from "../domains/catalog/application/types/product.tsx";
import {ShoppingCart} from "../domains/catalog/application/types/shoppingCart.tsx";

export const ProductContext = createContext<ProductContextType>({
    products: [],
    cart: [],
    addProductToCart: () => {
        throw new Error('addProductToCart debe ser implementado');
    },
    deleteProductFromCart: () => {
        throw new Error('deleteProductFromCart debe ser implementado');
    }
});

export function ProductProvider({children}: { children: ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<ShoppingCart[]>([]);

    const addProductToCart = ({product, quantity}: ProductToCart) => {
        const newProduct = {product: product, quantity: quantity}
        postProductToCart(newProduct).then(() => {
            setCart([...cart, newProduct])
        })
    }

    const deleteProductFromCart = (product: Product) => {
        deleteItemFromCart(product.id).then(() => {
            setCart(prevState => prevState.filter(cartProduct => cartProduct.product.id !== product.id))
        })
    }

    useEffect(() => {
        getProductList().then(products => {
            setProducts(products)
        })
        getShoppingCartList().then(products => {
            setCart(products)
        })
    }, [])

    return (
        <ProductContext value={{products, cart, addProductToCart, deleteProductFromCart}}>
            {children}
        </ProductContext>
    )
}