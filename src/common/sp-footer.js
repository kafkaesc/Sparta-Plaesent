import './sp-footer.css';

function SpFooter() {
    return (
        <div className="sp-footer-wrapper d-ib w100pc">
            <div className="flex-container">
                <div className="flex-ci"></div>
                <div className="flex-ci txt-center">
                    <p>Sign up for our newsletter</p>
                    <input type="email"></input>
                    <button>Submit</button>
                    
                </div>
            </div>
            <p className='footer-cr txt-center'>
                &copy; 2021 - Sparta Plaesent 
                - <a href="#">Instagram</a>
                - <a href="#">Facebook</a>
                - <a href="#">Twitter</a>
            </p>
        </div>
    );
}

export default SpFooter;
