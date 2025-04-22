export type ProductHistoryType = {
    product_name: string;
    product_price: number;
    quantity: number;
}

export type HistoryType = {
    id: number;
    total_price: number;
    buyout_date: string;
    type_payment_method: number;
    number_card: string;
    products: ProductHistoryType[];
}