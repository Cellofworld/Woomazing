import "./number.css";
import numbImg from "../../img/icons/phone.svg";


function Number() {
    return (
        <div className="number">
            <img className="number-img" src={numbImg} alt="number"/>
            <div className="number-content">+7 (495) 823-54-12</div>
        </div>
    )
}

export default Number