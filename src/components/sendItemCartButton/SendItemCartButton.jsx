import React from 'react';
import { addItemCart } from '../../store/cartSlice';
import { clearOrderProductCard } from '../../store/orderProductCardSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SendItemCartButton(props) {

  const {data, dataCart} = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function sendItemCart() {

    if (dataCart.size === null) {
      alert('Выберите размер')
    } else if (dataCart.color === null) {
      alert('Выберите цвет')
    } else {
      dispatch(addItemCart(
         {
           pid: data.pid,
           name: data.name,
           title: data.title,
           cost: data.newCost,
           srcImg: data.srcImg,
           size: dataCart.size,
           color: dataCart.color,
           quantity: dataCart.quantity
         }
       ))
      dispatch(clearOrderProductCard())
      navigate('/magazine')
    }

}

  return (
    <button
      onClick={() => sendItemCart() }
      className='add-cart-button'
    >Добавить в корзину</button>
  )
}

export default SendItemCartButton