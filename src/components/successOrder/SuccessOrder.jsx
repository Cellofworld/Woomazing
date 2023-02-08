import React from 'react';
import succesIcon from '../../img/icons/group.svg';
import './successOrder.css'
import SuccessOrderButton from './SuccessOrderButton';

function SuccessOrder() {
  return (
    <div className='success-order'>
        <div className="success-order-cont">
          <div className="success-order-icon-cont">
            <img className='success-order-icon' src={succesIcon} alt='succesIcon' />
          </div>
          <div className="success-order-description-cont">
            <div className="success-order-description">Заказ успешно оформлен</div>
            <div className="success-order-subtitle">Мы свяжемся с вами в ближайшее время!</div>
          </div>
        </div>
        <SuccessOrderButton />
    </div>
  )
}

export default SuccessOrder