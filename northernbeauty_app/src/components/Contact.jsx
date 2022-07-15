import {dataContact} from "../consts/consts"

const Contact = () => {
    return (
        <>
        <h2 className="contact-title">Contacto</h2>
        <div className="contact-container">
        {dataContact.map((contact, index) => {
            return(
                <div key= {index} className="contact-box">
                    <div className="contact-imgContainer">
                        <img src={contact.img}/>
                    </div>
                    <p className="contact-text">{contact.text}</p>
                    <p className="contact-text-contact">{contact.contact}</p>
                    <p className="contact-text-contact">{contact.contact2}</p>

                </div>
            )
        })}
        </div>
        </>
    )
}

export default Contact