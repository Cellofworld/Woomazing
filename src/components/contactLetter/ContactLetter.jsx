import "./contactLetter.css";

import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { sendMessageUserData } from "../../store/sendMessageSlice";

function ContactLetter() {

    const dispatch = useDispatch();

    const [userMessageData, setUserMessageData] = useState(
        {
            userName: '',
            userEmail:'',
            userTel: '',
            userMes: ''
        }
    );

    const hendleClick = () => {
        dispatch(sendMessageUserData(userMessageData))
        setUserMessageData({
            userName: '',
            userEmail:'',
            userTel: '',
            userMes: ''
        })
    }


  return (
    <div className="contact-letter">
        <div className="contact-letter-title">Напишите нам</div>
        <div className="letter-form">
            <form id="letterForm">
                <input 
                    className="contact-name"
                    type='text'
                    required
                    placeholder="Имя"
                    value={userMessageData.userName}
                    onChange={e => setUserMessageData({...userMessageData, userName:e.target.value}) }
                    />
                <input 
                    className="contact-email"
                    type='email'
                    required
                    placeholder="E-mail"
                    value={userMessageData.userEmail}
                    onChange={e => setUserMessageData({...userMessageData, userEmail:e.target.value}) }
                    />
                <input 
                    className="contact-tel"
                    type='tel'
                    required
                    placeholder="Телефон"
                    value={userMessageData.userTel}
                    onChange={e => setUserMessageData({...userMessageData, userTel:e.target.value}) }

                    />
                <textarea 
                    className="contact-message"
                    required
                    placeholder="Сообщение"
                    value={userMessageData.userMes}
                    onChange={e => setUserMessageData({...userMessageData, userMes:e.target.value}) }

                />
                <button
                    className="contact-button"
                    type='button'
                    onClick={hendleClick}
                >
                    Отправить
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactLetter