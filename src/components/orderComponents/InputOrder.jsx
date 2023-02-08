import React, { useState } from 'react'
import './inputOrder.css'

function InputOrder() {

    const [userOrderData, setUserOrderData] = useState(
        {
            userName: '',
            userEmail:'',
            userTel: '',
            userCity: '',
            userStreet: '',
            userHouse: '',
            userFlat: '',
            userComments:''
        }
    );


  return (
    <div className='input-order'>
        <div className="contact-letter">
        <div className="contact-letter-title">Данные покупателя</div>
        <div className="letter-form">
            <input 
                className="contact-name"
                placeholder="Имя"
                required
                onChange={e => setUserOrderData({...userOrderData, userName:e.target.value}) }
                />
            <input 
                className="contact-email"
                placeholder="E-mail"
                required
                onChange={e => setUserOrderData({...userOrderData, userEmail:e.target.value}) }
                />
            <input 
                className="contact-tel"
                placeholder="Телефон"
                required
                onChange={e => setUserOrderData({...userOrderData, userTel:e.target.value}) }

                />
        </div>
    </div>
    <div className="contact-letter">
        <div className="contact-letter-title">Адрес получателя</div>
        <div className="letter-form">
            <input 
                className="contact-name"
                placeholder="Страна"
                required
                onChange={e => setUserOrderData({...userOrderData, userCity:e.target.value}) }
                />
            <input 
                className="contact-email"
                placeholder="Улица"
                required
                onChange={e => setUserOrderData({...userOrderData, userStreet:e.target.value}) }
                />
            <input 
                className="contact-tel"
                placeholder="Дом"
                required
                onChange={e => setUserOrderData({...userOrderData, userHouse:e.target.value}) }

                />
            <input 
                className="contact-tel"
                placeholder="Квартира"
                required
                onChange={e => setUserOrderData({...userOrderData, userFlat:e.target.value}) }

                />
            
        </div>
    </div>
    <div className="contact-letter">
        <div className="contact-letter-title">Комментарий</div>
        <div className="letter-form">
        <textarea 
                className="contact-message"
                placeholder="Сообщение"
                required
                onChange={e => setUserOrderData({...userOrderData, userComments:e.target.value}) }

            />
        </div>
    </div>
    </div>

  )
}

export default InputOrder