import React from 'react';
import { useSelector } from 'react-redux';
import PlaceOrderButton from '../PlaceOrderButton/PlaceOrderButton';
import { sum } from '../../helpers/Sum';
import './cartresults.css'

function CartResult() {

    const orderItems = useSelector(state => state.cartOredr.cartItems) 

  return (
                    <div className='cart-results'>
                    <div className='cart-results-cont'>
                        <div className="cart-results-title">Итого:</div>
                        {
                            orderItems[0] ? (<div className="cart-results-cost">${sum(orderItems)}</div>) : (<div></div>)
                        }
                    </div>
                        <PlaceOrderButton />
                    </div>

  )
}

export default CartResult