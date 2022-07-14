import {dataTestimonials} from "../consts/consts"

const Testimonials = () => {
return (
    <>
    <h2 className="testimonials-title">Testimonios</h2>
    <div className="testimonials-container">
        {dataTestimonials.map((testimonial, index) => {
            return (
                <div key = {index} className='testimonial-box'>
                    <div className="testimonial-box-imgContainer">
                    <img className="testimonial-box-imgContainer-img" src={testimonial.icono} alt="" />
                    <p>{testimonial.text}</p>
                    </div>
                </div>
            )
        })}
    </div>
    </>
    )
}

export default Testimonials