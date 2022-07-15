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
                    </div>
                    <p className="testimonial-box-text">{testimonial.text}</p>
                    <p className="testimonial-box-name">{testimonial.name}</p>
                </div>
            )
        })}
    </div>
    </>
    )
}

export default Testimonials