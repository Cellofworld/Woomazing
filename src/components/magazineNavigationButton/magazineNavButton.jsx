import React from 'react'
import './magazineNavButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeChoice } from '../../store/userChoice';

function MagazineNavButton() {

    const choiceCat = useSelector(state => state.userChoiceNav.userChoiceNav)
    const dispatch = useDispatch();

  return (
    <div className='magazine-nav-button-cont'>
        <button 
            className={choiceCat === 'all' ? 'mg-nv-btn-active' : 'mg-nv-btn'}
            onClick={e => dispatch(changeChoice(e.target.value))}
            value='all'
        >Все</button>
        <button 
            className={choiceCat === 'tShort' ? 'mg-nv-btn-active' : 'mg-nv-btn'}
            onClick={e => dispatch(changeChoice(e.target.value))}
            value='tShort'
        >Майки</button>
        <button 
            className={choiceCat === 'swimSuit' ? 'mg-nv-btn-active' : 'mg-nv-btn'}
            onClick={e => dispatch(changeChoice(e.target.value))}
            value='swimSuit'
        >Купальники</button>
        <button 
            className={choiceCat === 'sweetShot' ? 'mg-nv-btn-active' : 'mg-nv-btn'}
            onClick={e => dispatch(changeChoice(e.target.value))}
            value='sweetShot'
        >Свитшоты</button>
    </div>
  )
}

export default MagazineNavButton