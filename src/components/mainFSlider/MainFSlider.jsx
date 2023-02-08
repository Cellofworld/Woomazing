import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./mainFSlider.css"
import ButtonToMagazine from "../buttonMagazine/ButtonMagazine";

function MainFSlider() {

    const textSlider = [
        {
            title: "Включай новый сезон с WOMAZING",
            subtitle: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
        },
        {
            title: "Что-то новенькое. Мы заждались тебя.",
            subtitle: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
        },
        {
            title: "Новые поступления в этом сезоне",
            subtitle: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
        },

    ];

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
          />
        );
      }

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <div>
              <ul style={{ margin: "10px" }}>{dots}</ul>
            </div>
          ),
          customPaging: i => (
            <div
            className="slider-f-dots"
              style={{
                width: "30px",
                height: "4px",
                color: "black",
                borderRadius: "5px"
              }}
            >
            </div>
          )
    };
    return (
        <div className="main-f-sl">
            <Slider {...settings}>
                {
                    textSlider.map((el) => (
                        <div className="slider-content" key={el}>
                            <div className="slide-title">{el.title}</div>
                            <div className="slide-subtitle">{el.subtitle}</div>
                            <div className="slide-button-to-magazine">
                                <ButtonToMagazine />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default MainFSlider