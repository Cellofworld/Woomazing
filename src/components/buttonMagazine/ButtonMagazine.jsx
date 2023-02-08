import { Link } from "react-router-dom";
import arrow from "../../img/icons/arrow.svg";
import "./buttonMagazine.css";


function ButtonToMagazine() {
    return (
            <Link className="link-button-to-magazine" to="/magazine">
                <div className="button-img-box">
                    <img className="arrow-to-magazine" src={arrow} alt="arrow" />
                </div>
                <div className="button-text">Открыть магазин</div>
            </Link>
    )
}

export default ButtonToMagazine