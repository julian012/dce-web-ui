import {urlBase} from "../../../../../shared/infrastructure/api/apiHandler.tsx";

const catalogBaseUrl = `${urlBase}/api/products`
const shoppingCartUrl = `${urlBase}/api/shopping_cart`

export const listAvailableProductsUrl = `${catalogBaseUrl}/list`
export const listShoppingCartUrl = `${shoppingCartUrl}/list`
export const deleteItemFromCartUrl = (productId: int) => `${shoppingCartUrl}/${productId}/remove`
export const addProductToCartUrl = `${shoppingCartUrl}/add`