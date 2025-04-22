import {useEffect, useState} from "react";
import {getHistoryListUser} from "../../infrastructure/api";
import './History.css'

export default function History() {

    const [items, setItems] = useState([])

    useEffect(() => {
        getHistoryListUser().then(res => {
            setItems(res)
        })
    }, [])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    const getPaymentMethod = (methodId: number) => {
        return methodId === 1 ? 'Tarjeta de crédito' : 'Otro método';
    };

    const formatCreditCardNumber = (cardNumber: string) => {
        if (!cardNumber) return 'N/A';
        const lastFour = cardNumber.slice(-4);
        return `Terminado en ${lastFour}`;
    };


    return (
        <div className="purchase-table-container">
            <table className="purchase-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Método de Pago</th>
                    <th>Productos</th>
                </tr>
                </thead>
                <tbody>
                {items.map((purchase) => (
                    <tr key={purchase.id}>
                        <td className="text-center">{purchase.id}</td>
                        <td>{formatDate(purchase.buyout_date)}</td>
                        <td className="text-right">${purchase.total_price.toLocaleString()}</td>
                        <td>
                            {getPaymentMethod(purchase.type_payment_method)}
                            <br/>
                            <span className="card-number">{formatCreditCardNumber(purchase.number_card)}</span>
                        </td>
                        <td>
                            <ul className="product-list">
                                {purchase.products.map((product, index) => (
                                    <li key={index}>
                                        {product.product_name} -
                                        Cantidad: {product.quantity} -
                                        Precio: ${product.product_price.toLocaleString()}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}