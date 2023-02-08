import Navigation from "../navigation/Navigation";
import "./footer.css";
import facebook from "../../img/icons/facebook.svg";
import inst from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import payIcons from "../../img/icons/visa-mastercard.svg";
import Logo from "../logo/Logo";
import Number from "../number/Number";


function Footer() {
  return (
    <div className="footer">
        <div className="footer-navigation">
            <Logo />
            <Navigation />
            <div className="footer-cal">
                <Number />
                <div className="footer-email">hello@womazing.com</div>
            </div>
        </div>
        <div className="footer-description">
            <div className="autor">
                <div className="right">© Все права защищены</div>
                <div className="right">Политика конфиденциальности</div>
                <div className="right">Публичная оферта</div>
            </div>
            <div className="footer-icons">
                <div className="media">
                    <img className="img-media" src={inst} alt="media" />
                    <img className="img-media" src={facebook} alt="media" />
                    <img className="img-media" src={twitter} alt="media" />
                </div>
                <div className="pay-img">
                    <img className="img-pay-icon" src={payIcons} alt="payIcons" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer