import './CartItems.css'
const CartItems = (props) => {
    return (
        <div className="productList">
            {props.items.map(product => {
                return (
                    <div >
                        <div>
                            <img src={product.imageUrl} alt={product.title} />
                        </div>
                        <div className='product-price'>
                            <h4> ${product.price}</h4>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default CartItems;