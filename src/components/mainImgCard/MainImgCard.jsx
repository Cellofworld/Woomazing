import fImg from "../../img/slider/mainSlider/mainPhoto.png";
import sImg from "../../img/slider/mainSlider/secondPhoto.png";
import tImg from "../../img/slider/mainSlider/thrPhoto.png";
import "./mainImgCard.css";


function MainImgCard() {
    return (
        <div className="m-img-c">
            <img className="m-img i-f" src={fImg} alt="img" />
            <img className="m-img i-t" src={tImg} alt="img" />
            <img className="m-img i-s" src={sImg} alt="img" />
        </div>
    )
}

export default MainImgCard