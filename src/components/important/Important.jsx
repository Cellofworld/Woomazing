import React from 'react';
import qualitySvg from "../../img/icons/quality.svg";
import speedSvg from "../../img/icons/speed.svg";
import handSvg from "../../img/icons/hand.svg";
import "./important.css"


const ImportantDb = [
    {
        title: "Качество",
        subtitle: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества",
        src: qualitySvg,
    },
    {
        title: "Скорость",
        subtitle: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах",
        src: speedSvg,
    },
    {
        title: "Ответственность",
        subtitle: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing",
        src: handSvg,
    },
]

function Important() {


  return (
    <div className="imp">
        <div className="imp-title">Что для нас важно</div>
        <div className="imp-cards">
            {
                ImportantDb.map((el) => (
                    <div className="imp-item" key={el.title}>
                        <img className="imp-item-img" src={el.src} alt={el.title} />
                        <div className="imp-item-tlt">{el.title}</div>
                        <div className="imp-item-sbtl">{el.subtitle}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Important