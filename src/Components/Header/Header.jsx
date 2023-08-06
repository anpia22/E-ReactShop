import Cart from "../Cart/Cart";
import { useCart } from "../Cart/CartContext/CartContext";
import './Header.css'
const Header = () => {
    const { cart } = useCart();
    return (
        <div className="header">
            <h1 >E-ReactShop</h1>
            <div>
                <Cart /></div>
        </div>
    );
}

export default Header;
