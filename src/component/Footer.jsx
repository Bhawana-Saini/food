import applogo from "../../src/asserts/image/applogo.png"
import playlogo from "../../src/asserts/image/playlogo.png"


const Footer = () => {
    return (
        <div className="footer-containt">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 mt-5">
                        <p>COMPANY</p>
                        <ul>
                            <li>About us</li>
                            <li>Team</li>
                            <li>Careers</li>
                            <li>Bug Bounty</li>
                            <li>Apna Thikana Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <p>CONTACT</p>
                        <ul>
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with  us</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <p>LEGAL</p>
                        <ul>
                            <li>Terms & Condition</li>
                            <li>Refund & Cancellation</li>
                            <li>Privacy Policy</li>
                            <li>Offer Term</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5 footer_logo">
                        <img src={applogo} alt="logo" style={{ height: "110px", width: "260px" }} />
                        <img src={playlogo} alt="logo" style={{ height: "240px", width: "260px" }} />
                    </div>
                </div>
                <hr style={{ color: "white" }} />
            </div>

            <div className="container">
                <div className="row flex_items_center">
                    <div className="col-md-4 footer_logo"><a href="/"><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/foodies-logo-design-template-44f1cac34d28b362c02fd8079e141ad6_screen.jpg?ts=1658385175" alt="logo" /></a></div>
                    <div className="col-md-4"><h5 style={{ color: "white" }}>© 2023 Foodies</h5></div>
                    <div className="col-md-4 footer_icon">
                        <span><i className="fa fa-facebook"></i></span>
                        <span><i className="fa fa-pinterest"></i></span>
                        <span><i className="fa fa-instagram"></i></span>
                        <span><i className="fa fa-twitter"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;