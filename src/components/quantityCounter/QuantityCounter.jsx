import React from 'react';
import { useDispatch } from 'react-redux';
import './quantityCounter.css';

function QuantityCounter(props) {

    const dispatch = useDispatch();
    const {data, handleFunc} = props;


    function handQuantity(e) {
        if (data + e >= 1) {
            dispatch(handleFunc(data + e))
        } else {dispatch(handleFunc(1))}
    }


  return (
    <div className='add-to-cart-cont'>
        <div className='quantity-counter'>
            <div className="quantity-counter-title">Выберите количество</div>
            <div className="quantity-counter-cont">
                <button
                    className={data === 1 ? 'button-counter-d' : 'button-counter-a'}
                    onClick={() => {handQuantity(-1)}}
                >-</button>
                <div className='counter'>{data}</div>
                <button
                    className='button-counter-a'
                    onClick={() => {handQuantity(+1)}}
                >+</button>
            </div>
        </div>
    </div>
  )
}

export default QuantityCounter