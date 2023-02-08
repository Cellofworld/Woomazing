import "./logo.css";
import logoImg from "../../img/icons/dress.svg";

function Logo() {
    return (
        <div className="logo">
            <img className="logo-img" src={logoImg} alt="logo"/>
            <div className="logo-title">WOMAZING</div>
        </div>
    )
}

export default Logo