import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
                <div className="nav-bar">
                    <NavLink to="/" className={({isActive}) => isActive ? "nav-item-active" : "nav-item"} >Главная</NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item-active" : "nav-item"} to="/magazine">Магазин</NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item-active" : "nav-item"} to="/brands">О бренде</NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item-active" : "nav-item"} to="/contacts">Контакты</NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item-active" : "nav-item"} to="/cart">Корзина</NavLink>
                </div>
    </div>
  )
}

export default Navigation