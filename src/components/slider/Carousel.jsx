import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import './slider.css'
import { Link } from 'react-router-dom';


// function Arrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }


const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
     <div className='container'>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className='card'>
            <Link to={"/allmovie"}>
            <img src='https://i.ytimg.com/vi/CO8kImGw8lE/maxresdefault.jpg' alt='' className='cards'/>
            </Link>
          </div>
          <div className='card'>
          <Link to={"/allmovie"}>
            <img src='https://image-resizer-cloud-api.akamaized.net/image/AE7E0C7E-D24B-4087-AB78-29DDBC67AA30/0-16x9.jpg?width=1920' alt=''className='cards'/>
            </Link>
          </div>
          <div className='card'>
          <Link to={"/allmovie"}>
            <img src='https://i.ytimg.com/vi/OP0nou-f0yU/maxresdefault.jpg' alt=''className='cards'/>
            </Link>
          </div>
          <div className='card'>
          <Link to={"/allmovie"}>
            <img src='https://gumlet.assettype.com/nationalherald%2F2022-02%2F7fd2be44-470c-4846-9f38-d5d74c141692%2FRudra.jpeg?rect=0%2C0%2C1280%2C720&format=auto' alt=''className='cards'/>
            </Link>
          </div>
          <div className='card'>
          <Link to={"/allmovie"}>
            <img src='https://images.thedirect.com/media/article_full/mcu-marvel-biggest-critcisms-after-avengers-endgame.jpg' alt=''className='cards'/>
            </Link>
          </div>
          <div className='card'>
          
            <img src='https://resources.pulse.icc-cricket.com/ICC/photo/2023/06/27/58598b3c-97a1-4e39-a830-ed4352609cc7/CWC23-Fixtures-announcement-16x9-v2.jpeg' alt=''className='cards'/>
           
          </div>
        </Slider>
      </div>
  )
}

export default Carousel