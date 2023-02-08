import React from 'react';
import SuccessOrder from '../../components/successOrder/SuccessOrder';


function SuccessOrderPage() {
  return (
    <div className='success-order-page'>
        <div className="success-order-title">Заказ получен</div>
      <SuccessOrder />
    </div>
  )
}

export default SuccessOrderPage