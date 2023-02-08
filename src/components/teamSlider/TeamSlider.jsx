import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fImg from "../../img/slider/teamSlider/teamOne.png";
import sImg from "../../img/slider/teamSlider/teamTwo.png";
import tImg from "../../img/slider/teamSlider/teamThr.png";
import "./teamSlider.css";
import { Link } from 'react-router-dom';

function TeamSlider() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
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
        variableWidth: true,
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
    <div className="team-slider">
      <div className="team-slider-title">Команда мечты Womazing</div>
      <div className="team-slider-container">
        <div className="team-slider-box">
            <Slider {...settings}>
                <div style={{width:730}}>
                    <img className="team-slider-img" src={fImg} alt="sliderphoto" />
                </div>
                <div style={{width:730}}>
                    <img className="team-slider-img" src={sImg} alt="sliderphoto"/>
                </div>
                <div style={{width:730}}>
                    <img className="team-slider-img" src={tImg} alt="sliderphoto"/>
                </div>
            </Slider>
        </div>
            <div className="team-slider-description">
              <div className="t-s-d-tlt">Для каждой</div>
              <div className="t-s-d-sbtl">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</div>
              <div className="t-s-d-sbtl">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</div>
              <Link className="link-about" to="/brands">Подробнее о бренде</Link>
            </div>
      </div>
    </div>
  )
}

export default TeamSlider