import React from 'react';
import './cartMain.css';
import { useSelector } from 'react-redux';
import multiply from '../../img/icons/multiply.svg'
import CartResult from '../cartResult/CartResult';
import { useDispatch } from 'react-redux';
import {removeItem} from '../../store/cartSlice'

function CartMain() {

const cartItem = useSelector(state => state.cartOredr.cartItems)
const dispatch = useDispatch();

  return (
    <div className='cart'>
        <div className='cart-title'>Корзина</div>
        {
            cartItem.length === 0 ? 
            <div className='no-cart'>Ваша корзина пуста</div> : 
                <div className="cart-cont">
                    <div className='cart-items'>
                        {
                            cartItem && (
                                cartItem.map(el => (
                                    <div className="cart-item-cont" key={el.pid}>
                                        <div className="description-head">
                                            <div className="product-head">Товар</div>
                                            <div className="price-head">Цена</div>
                                            <div className="quantity-head">Количество</div>
                                            <div className="total-head">Всего</div>
                                        </div>
                                        <div className="cart-item-card-cont">
                                            <div className='cart-item-img-cont'>
                                                <div className="delete-cart-item">
                                                    <button
                                                        className='delete-item-button'
                                                        onClick={() => dispatch(removeItem(el.pid))}
                                                    >
                                                        <img className='delete-item-img' src={multiply} alt='delete' />
                                                    </button>
                                                </div>
                                                <img className="cart-item-img" src={el.srcImg} alt='img'/>
                                                <div className="cart-item-name">{el.title} {el.name}</div>
                                            </div>
                                            <div className="cart-item-cost">${el.cost}</div>
                                            <div className="cart-item-quantity">{el.quantity}</div>
                                            <div className="cart-item-all-cost">${
                                                el.cost * el.quantity
                                            }</div>
                                        </div>

                                    </div>
                                ))
                            )
                        }
                    </div>
                    <CartResult />
            </div> 
        }
    </div>
  )
}

export default CartMain