import React, { Component } from 'react'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import { browserUrl } from '../../my-config'
import '../style/topcarousel.scss'

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  )
}

export default class TopCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    }
    return (
      <div className="home-top-carousel-container">
        <Slider {...settings}>
          <div className="home-top-carousel-banner">
            <img
              src={browserUrl + '/home-img/food_photo00.jpg'}
              alt="top carousel"
            />
          </div>
          <div className="home-top-carousel-banner">
            <img
              src={browserUrl + '/home-img/food_photo01.jpg'}
              alt="top carousel"
            />
          </div>
          <div className="home-top-carousel-banner">
            <img
              src={browserUrl + '/home-img/food_photo02.jpg'}
              alt="top carousel"
            />
          </div>
          <div className="home-top-carousel-banner">
            <img
              src={browserUrl + '/home-img/food_photo03.jpg'}
              alt="top carousel"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
