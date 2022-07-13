import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../Images/slider1.jpg'
import img2 from '../Images/slider2.jpg'
import img3 from '../Images/slider3.jpg'



const Slider = () => {
return (

    <Carousel className='carousel_container'>
    <div>
        <img className='carousel_img' src= {img1} />
    </div>
    <div>
        <img className='carousel_img'   src= {img2} />
    </div>
    <div>
        <img  className='carousel_img'  src={img3} />
    </div>
</Carousel>
)
    
}

export default Slider