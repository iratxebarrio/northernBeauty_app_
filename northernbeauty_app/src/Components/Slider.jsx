import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




const Slider = () => {
return (

    <Carousel className='carousel_container' 
    showArrows= {false}
    infiniteLoop = {true} 
    autoPlay = {true} >
    <div>
        <img className='carousel_img' src= 'Images/slider1.jpg'/>
    </div>
    <div>
        <img className='carousel_img'   src= 'Images/slider2.jpg' />
    </div>
    <div>
        <img  className='carousel_img'  src='Images/slider3.jpg' />
    </div>
</Carousel>
)
    
}

export default Slider