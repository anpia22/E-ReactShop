import Cart from "../Cart/Cart";
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1 className="text-center">E-ReactShop</h1>
            <div>
                <Cart></Cart></div>
        </div>
    );
}

export default Header;
