import './Cart.css'
import {Product} from "../../../catalog/presentation/components/Product.tsx";
import {useContext, useId} from "react";
import {ProductContext} from "../../../../context/ProductContext.tsx";

export default function Cart() {
    const {cart, deleteProductFromCart} = useContext(ProductContext);
    const productId = useId();

    return (
        <main className='products'>
            <ul>
                {cart.map(product => (
                    <li key={productId}>
                        <Product product={product.product}/>
                        <div>
                            Cantidad: {product.quantity}
                            <br/>
                            {(!product.product.is_available || !product.product.product_stock) &&
                                <strong className='not_available'>Este producto ya no esta disponible ☹️</strong>}
                        </div>
                        <button onClick={() => deleteProductFromCart(product.product)}>Eliminar del carro</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}