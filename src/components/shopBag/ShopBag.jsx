import shopBag from "../../img/icons/bag.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ShopBag() {

    const cartData = useSelector(state => state.cartOredr.cartItems)

    return (
        <Link to='cart'>
            <div className="shop-bag">
                <div 
                    className="shop-bag-circle"
                    style={{
                        backgroundColor: cartData.length === 0 ? 'gray' : '#f55123'
                    }}
                >{cartData.length}</div>
                <img className="shop-bag-img" src={shopBag} alt="shop bag"/>
            </div>
        </Link>
    )
}

export default ShopBag