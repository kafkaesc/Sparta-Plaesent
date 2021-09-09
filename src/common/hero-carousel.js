import './hero-carousel.css';

function HeroCarousel(props) {
    return (
        <div className="d-ib w100pc">
            <div className="h-carousel" 
                style={{
                    backgroundImage: `url(${props.slides?.[0]?.image})`, 
                    backgroundPosition: `center`
            }}>
                <div className="sp-container">
                    <h2>Screening DVF Secret Agent Part 2</h2>
                    <p className="subhead">October 15, 2021</p>
                    <p className="small">Join us for a private screening of DVF Secret Agent Part 2</p>
                </div>
            </div>
            <div className="txt-center">
                <div className="active carousel-circle"></div>
                <div className="carousel-circle"></div>
                <div className="carousel-circle"></div>
            </div>
        </div>
    );
}

export default HeroCarousel;
