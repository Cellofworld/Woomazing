import brandImg1 from "../../img/brands/brands1.png";
import brandImg2 from "../../img/brands/brands2.png";
import ButtonToMagazine from "../buttonMagazine/ButtonMagazine";

import "./brandsMain.css";


function BrandsMain() {
  return (
    <div className="brands-main">
        <div className="brands-title">О бренде</div>
        <div className="brands-content-f">
            <img className="brands-img" src={brandImg1} alt="brandImg" />
            <div className="brands-description">
                <div className="brands-d-tlt">Идея и женщина</div>
                <div className="brands-d-sbtl">
                    Womazing была основана в 2010-ом и стала одной из 
                    самых успешных компаний нашей страны. Как и многие итальянские фирмы, 
                    Womazing остаётся семейной компанией, хотя ни один из членов семьи 
                    не является модельером.
                </div>
                <div className="brands-d-sbtl">
                    Мы действуем по успешной формуле, прибегая к услугам известных модельеров для 
                    создания своих коллекций. Этот метод был описан критиком моды 
                    Колином Макдауэллом как форма дизайнерского со-творчества, характерная 
                    для ряда итальянских prêt-a-porter компаний. 
                </div>
            </div>
        </div>
        <div className="brands-content-s">
            <img className="brands-img" src={brandImg2} alt="brandImg" />
                <div className="brands-description">
                    <div className="brands-d-tlt">Магия в деталях</div>
                    <div className="brands-d-sbtl">
                        Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. 
                        Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.
                    </div>
                    <div className="brands-d-sbtl">
                        Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно
                        связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную 
                        школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, 
                        особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter 
                        попросту не существовало.  
                    </div>
                </div>
            </div>
            <div className="button-brands">
                <ButtonToMagazine />
            </div>
    </div>
  )
}

export default BrandsMain