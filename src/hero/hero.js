import './hero.css';

const Hero = () => {
    return (
        <section id="section-hero" className='bg-pattern'>
            <div className='container'>
                <div className='hero-container'>
                    <div className='col hero-title-col'>
                        <h1>
                            <span className='hero-line'>28 años produciendo</span>
                            <span className='hero-line'><strong>alimentos con cariño</strong></span>
                            <span className='hero-line'>para toda la familia</span>
                        </h1>
                    </div>
                    <div className='col col-hero-img'>
                        <img className='hero-img' src="./picture-hero.png" alt="kiana kid"/>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Hero;