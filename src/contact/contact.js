import "./contact.css";

const Contact = () => {
    return (
        <section id="section-contact">
            <div className="container">
                <div className="contact-container">
                    <h2>Contáctanos</h2>
                </div>
                <div className="contact-container">
                    <div className="col">
                        <div className="contact-item">
                            <span>Ubicados en Calabozo, Edo. Guárico</span>    
                        </div>
                        <div className="contact-item">
                            <a className="link" href="https://wa.me/584243533131">Whatsapp: +58 424-3533131</a>    
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-item">
                            <a className="link" href="https://www.instagram.com/alimentoskiana/">@alimentoskiana</a>  
                        </div>
                        <div className="contact-item">
                            <a className="link" href="mailto:alimentoskiana@gmail.com">alimentoskiana@gmail.com</a>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;