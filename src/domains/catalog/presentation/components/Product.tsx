import {URL_PROD} from "../../../../shared/application/constants/env.tsx";
import {Product as ProductType} from "../../application/types/product.tsx";

export function Product({product}: { product: ProductType }) {
    const productImage = `${URL_PROD}${product.image}`;
    const trunkDescription = `${product.description.substring(0, 80)}`;

    return (
        <div>
            <img src={productImage} alt={product.name}
                 style={{width: '100%', height: '200px', objectFit: 'cover'}}/>
            <div>
                <strong>{product.name}</strong>
                <p>{product.product_price}</p>
            </div>
            <div>
                <p>{trunkDescription}</p>
            </div>
        </div>
    )
}

// NAME
// DESCRIPTION
// STOCK
// PRICE