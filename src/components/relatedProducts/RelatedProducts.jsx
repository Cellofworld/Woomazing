import React from 'react'
import { Link } from 'react-router-dom'

function RelatedProducts(props) {

    const {data} = props;
console.log(data)
  return (
    <div className='related-product'>
    <div className="related-product-title">Связанные товары</div>
    <div className='related-product-items-cont'>
        {
            data.map(el => (
                <Link key={el.pid} to={`/magazine/${el.category}/${el.pid}`} >
                     <div 
                        className='product-card' 
                    >
                        <div className="mask">
                            <div className='mask-effect'></div>
                            <img className='product-card-img' src={el.srcImg} alt={el.title} />
                        </div>
                            <div className='product-card-cont'>
                                <div className='product-card-title-cont'>
                                    <div className="product-card-title">{el.title}</div>
                                    <div className="product-card-name">{el.name}</div>
                                </div>
                                <div className="product-card-cost-cont">
                                    <div className="product-card-old-cost">${el.oldCost}</div>
                                    <div className="product-card-new-cost">${el.newCost}</div>
                                </div>
                            </div>
                    </div>
                </Link>
            ))
        }
    </div>
</div>
  )
}

export default RelatedProducts