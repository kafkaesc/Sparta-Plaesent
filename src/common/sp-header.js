import './sp-header.css';
import logo from '../assets/images/logo.svg';

function SpHeader() {
    return (
        <div className='sp-header-wrapper'>
            <div className="sp-header-container">
                <div className="d-ib w33pc fl-left">
                    <img id="SpLogo" alt="Sparta Plaesent" src={logo} />
                </div>
                <div className="d-ib w66pc txt-right">
                    <ul className="sitenav">
                        <li>215.555.5555</li>
                        <li>Login</li>
                        <li>三</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SpHeader;
