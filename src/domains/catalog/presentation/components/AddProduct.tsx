import {useContext, useId, useState} from "react";
import {Product} from "../../application/types/product.tsx";
import {ProductContext} from "../../../../context/ProductContext.tsx";

export function AddProduct({product}: { product: Product }) {
    const [openQuantity, setOpenQuantity] = useState(false);
    const {addProductToCart} = useContext(ProductContext);
    const idInput = useId();

    const handle = () => {

        addProductToCart({product, quantity: document.getElementById(idInput)?.value})
    }

    return (
        <>
            {!openQuantity ?
                <button className="catalog-add-btn" onClick={() => setOpenQuantity(true)}>
                    Agregar al carrito
                </button> :
                <div className="catalog-select-quantity">
                    <input id={idInput} type='number' min='1' max={product.product_stock} defaultValue='1'/>
                    <button onClick={handle}>✅</button>
                    <button onClick={() => setOpenQuantity(false)}>❌</button>
                </div>
            }

        </>
    )
}