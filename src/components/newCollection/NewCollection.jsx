import React from 'react';
import "./newCollection.css";
import sh from "../../img/productPhoto/shirt.png";
import gl from "../../img/productPhoto/glow.png";
import swsh from "../../img/productPhoto/sweetShot.png";
import ButtonToMagazine from '../buttonMagazine/ButtonMagazine';
import { Link } from 'react-router-dom';


function NewCollection() {

    const newCollectionDB = [
        {
            pid: 101,
            title: "Футболка USA",
            price: "$229",
            category: 'tShort',
            promoPrice: "$129",
            src: sh
        },
        {
            pid: 201,
            title: "Купальник Glow",
            price: "$129",
            category: 'swimSuit',
            promoPrice: null,
            src: gl
            
        },
        {
            pid: 301,
            title: "Свитшот Sweet Shot",
            price:  "$129",
            category: 'sweetShot',
            promoPrice: null,
            src: swsh
        },

    ];

  return (
    <div className="new-col">
        <div className="new-col-title">Новая коллекция</div>
        <div className="new-col-cards">
            {
                newCollectionDB.map((el) => (
                    <Link key={el.pid} to={`/magazine/${el.category}/${el.pid}`} >
                         <div 
                        className='product-card' 
                    >
                        <div className="mask">
                            <div className='mask-effect'></div>
                            <img className='product-card-img' src={el.src} alt={el.title} />
                        </div>
                            <div className="col-item-title">{el.title}</div>
                                {el.promoPrice ? 
                                    <div className="col-item-price-box">
                                        <div className="col-item-promo-price">{el.price}</div>
                                        <div className="col-item-price">{el.promoPrice}</div>
                                    </div> : 
                                    <div className="col-item-price-box">
                                        <div className="col-item-price">{el.price}</div>
                                    </div>
                                }
                        </div>
                    </Link>
                ))
            }
        </div>
        <div className="new-col-but">
            <ButtonToMagazine />
        </div>
    </div>
  )
}

export default NewCollection