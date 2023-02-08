import React from 'react';
import InputOrder from '../../components/orderComponents/InputOrder';
import ResultOrder from '../../components/orderComponents/ResultOrder';
import './makingOrder.css';

function MakingOrder() {
  return (
    <div className="making-order">
        <div className='making-order-title'>Оформление заказа</div>
        <div className="making-order-cont">
          <InputOrder />
          <ResultOrder />
        </div>
    </div>
  )
}

export default MakingOrder