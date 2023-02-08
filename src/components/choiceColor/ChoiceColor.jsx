import React from 'react';
import { useDispatch } from 'react-redux';

function ChoiceColor(props) {
    const dispatch = useDispatch();
    const {data, handleFunc, selectColor} = props


  return (
    <div className="choice-color">
        <div className="choce-color-title">Выберите цвет</div>
        <div className="choice-color-cont">
            {
                data.map(el => (
                    <div 
                        className={el === selectColor ? 'color-active' : 'color'}
                        key={el}
                        onClick={() => dispatch(handleFunc((el)))}
                        style={
                            { background: `${el}`}
                                                }
                        ></div>
                ))
            }
        </div>
    </div>
  )
}

export default ChoiceColor