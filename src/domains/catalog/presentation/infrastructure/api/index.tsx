import {
    addProductToCartUrl,
    deleteItemFromCartUrl,
    listAvailableProductsUrl,
    listShoppingCartUrl
} from "./backendUrls.tsx";
import {authHeader, handleResponse} from "../../../../../shared/infrastructure/api/apiHandler.tsx";
import {ShoppingCart} from "../../../application/types/shoppingCart.tsx";
import {Product, ProductToCart} from "../../../application/types/product.tsx";

export const getProductList = (): Promise<Product[]> => {
    const requestOptions = {
        method: 'GET',
        headers: {}
    }
    return fetch(listAvailableProductsUrl, requestOptions).then(handleResponse)
}

export const getShoppingCartList = (): Promise<ShoppingCart[]> => {
    const requestOptions = {
        method: 'GET',
        headers: {}
    }
    return fetch(listShoppingCartUrl, requestOptions).then(handleResponse)
}

export const deleteItemFromCart = (productId: int): Promise<void> => {
    const requestOptions = {
        method: 'DELETE',
        headers: {}
    }
    return fetch(deleteItemFromCartUrl(productId), requestOptions).then(handleResponse)
}

export const postProductToCart = ({product, quantity}: ProductToCart) => {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            product: product.id,
            quantity: quantity
        })
    }
    return fetch(addProductToCartUrl, requestOptions).then(handleResponse)
}