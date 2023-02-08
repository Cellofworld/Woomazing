import React from 'react';
import ProductCard from '../productCrd/ProductCard';
import { useSelector } from 'react-redux';
import MagazineNavButton from '../magazineNavigationButton/magazineNavButton';
import { sortItem } from '../../helpers/Sort';
import './magazineMain.css'

function MagazineMain() {

  const choiceNav = useSelector(state => state.userChoiceNav.userChoiceNav)
  const dataItem = useSelector(state => state.productsData)

  return (
    <div className='magazineMain'>
        <div className="magazine-title">Магазин</div>
        <div className="magazine-navigate">
          <MagazineNavButton />
        </div>
        <div className="sort-magazine">
            <ProductCard data= {sortItem(choiceNav, dataItem)} />
        </div>
    </div>
  )
}

export default MagazineMain