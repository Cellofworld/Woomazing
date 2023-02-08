import React from 'react'
import { Link } from 'react-router-dom';
import { completeOrder } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

function ResultOrderbutton() {

  const dispatch = useDispatch();

  return (
    <div className='result-order-button-cont'>
      <Link to='/cart/order/success' >
        <button 
          className='result-order-button'
          onClick={() => {dispatch(completeOrder())}}
        >Разместить заказ</button>
      </Link>
    </div>
  )
}

export default ResultOrderbutton