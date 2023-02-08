import ContactLetter from "../../components/contactLetter/ContactLetter";
import Maps from "../../components/maps/Maps";
import "./contacts.css";

function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts-title">Контакты</div>
            <Maps />
            <div className="contacts-info">
                <div className="contacts-phone">
                    <div className="contacts-info-title">Телефон</div>
                    <div className="contacts-info-d">+7 (495) 823-54-12</div>
                </div>
                <div className="contacts-email">
                    <div className="contacts-info-title">E-mail</div>
                    <div className="contacts-info-d">info@sitename.com</div>
                </div>
                <div className="contacts-adres">
                    <div className="contacts-info-title">Адрес</div>
                    <div className="contacts-info-d">г. Москва, 3-я улица Строителей, 25</div>
                </div>
            </div>
            <ContactLetter />
        </div>
    )
}

export default Contacts

