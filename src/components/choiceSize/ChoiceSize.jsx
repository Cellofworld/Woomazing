import React from 'react';
import { useDispatch } from 'react-redux';

function ChoiceSize(props) {

    const {data, handleFunc, selectedSize} = props;
    const dispatch = useDispatch();
  return (
    <div className="choice-size">
        <div className="choice-size-title">Выберите размер</div>
        <div className="choice-size-cont">
            {
                data.map(el => (
                    <div
                        key={el} 
                        className={el === selectedSize ? 'size-active' : 'size'}
                        onClick={() => dispatch(handleFunc(el))}
                        >{el}</div>
                 ))
             }
        </div>
    </div>
  )
}

export default ChoiceSize