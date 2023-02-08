import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { sendOrderProductCardQuantity } from '../../store/orderProductCardSlice';
import { sendOrderProductCardColor } from '../../store/orderProductCardSlice';
import { sendOrderProductCardSize } from '../../store/orderProductCardSlice';
import QuantityCounter from '../quantityCounter/QuantityCounter';
import ChoiceColor from '../choiceColor/ChoiceColor';
import ChoiceSize from '../choiceSize/ChoiceSize';
import SendItemCartButton from '../sendItemCartButton/SendItemCartButton';
import './oneProduct.css';
import RelatedProducts from '../relatedProducts/RelatedProducts';

function OneProduct() {

    const [productItem ,setProductItem] = useState();
    const {id} = useParams();
    const data = useSelector(state => state.productsData);
    const orderProductCardData = useSelector(state => state.orderCardData);

    useEffect(() => {
        setProductItem(data.find(item => item.pid === id))
    },[data, id])

  return (
    <div className='product-order'>
        {
            productItem && (
                <div className='product-order-add'>
                    <div className="product-order-title">{productItem.title} {productItem.name}</div>
                    <div className="product-order-item-cont">
                        <img className='product-order-img' src={productItem.srcImg} alt='img' />
                        <div className="product-order-info">
                            <div className="product-order-cost">
                                <div className="product-order-new-cost">${productItem.newCost}</div>
                                <div className="product-order-old-cost">${productItem.oldCost}</div>
                            </div>
                            <ChoiceSize data = {productItem.size} handleFunc={sendOrderProductCardSize} selectedSize= {orderProductCardData.size} />
                            <ChoiceColor data = {productItem.color} handleFunc ={sendOrderProductCardColor} selectColor={orderProductCardData.color} />
                            <QuantityCounter data = {orderProductCardData.quantity} handleFunc = {sendOrderProductCardQuantity} />
                            <SendItemCartButton data={productItem} dataCart={orderProductCardData} />
                        </div>
                    </div>
                    <RelatedProducts data = {productItem.relatedProd} />
                </div>
            )
        }
    </div>
  )
}

export default OneProduct