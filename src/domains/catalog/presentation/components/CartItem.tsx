import {useContext} from "react";
import {ProductContext} from "../../../../context/ProductContext.tsx";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {
    ShoppingCart as PurchasesIcon,
} from '@mui/icons-material';

export function CartItem({Link, to}) {
    const {cart} = useContext(ProductContext);

    const showCount = () => {
        if (cart.length) {
            return <strong style={{color: 'red'}}>{cart.length}</strong>
        } else {
            return <></>
        }
    }

    return (
        <ListItemButton component={Link} to={to}>
            <ListItemIcon>
                <PurchasesIcon/>
            </ListItemIcon>
            <ListItemText primary="Carrito"/> {showCount()}
        </ListItemButton>
    )
}