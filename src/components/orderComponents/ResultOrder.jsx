import React from 'react';
import { useSelector } from 'react-redux';
import { sum } from '../../helpers/Sum';
import ResultOrderbutton from './ResultOrderbutton';

function ResultOrder() {

  const cartItems = useSelector(state => state.cartOredr.cartItems)


  return (
    <div className='result-order'>
      <div className="result-order-title">Ваш заказ</div>
      <div className="result-order-cont">
        <div className="result-order-name-cont">
          <div className="result-order-name">Товар</div>
          <div className="result-order-desc">Всего</div>
        </div>
            {
              cartItems.map(el => (
                <div className="result-order-products-cont" key={el.pid}>
                  <div className="result-order-item">{el.title} {el.name}</div>
                  <div className="result-order-products-cost">${el.cost * el.quantity}</div>
                </div>
              ))
            }
        <div className="result-order-cost-cont">
          <div className="result-order-cost-title">Итого</div>
          <div className="result-order-cost">${sum(cartItems)}</div>
        </div>
      </div>
      <ResultOrderbutton />
    </div>
  )
}

export default ResultOrder