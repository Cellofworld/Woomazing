import React from 'react';
import { Link } from 'react-router-dom';
import './placeorderbutton.css'

function PlaceOrderButton() {
  return (
    <div className='place-order-button-cont'>
        <Link className='place-order-button-link' to={'/cart/order'}>
            <div className='place-order-button'>Оформить заказ</div>     
        </Link>
    </div>
  )
}

export default PlaceOrderButton