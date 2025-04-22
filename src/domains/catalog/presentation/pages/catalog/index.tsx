import {Product} from "../../components/Product.tsx";
import {Product as ProductType} from "../../../application/types/product.tsx"
import './Catalog.css'
import {ProductContext} from "../../../../../context/ProductContext.tsx";
import {useContext} from "react";
import {AddProduct} from "../../components/AddProduct.tsx";

export function Catalog() {
    const {products, cart, deleteProductFromCart} = useContext(ProductContext);

    const isOnShoppingCart = (product: ProductType): boolean => {
        return cart.some(productOnCart => productOnCart.product.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Product product={product}/>
                        <div>
                            {isOnShoppingCart(product) ?
                                <button className="catalog-delete-btn" onClick={() => deleteProductFromCart(product)}>
                                    Eliminar del carro
                                </button> :
                                <AddProduct product={product}/>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}