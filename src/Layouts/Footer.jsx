import React from 'react'
import "../assets/footer.scss"


function Footer() {
    return (
        <>
            <footer>
                <div className="footerSect">
                    <div className="footerCat">
                        <h4>CATEGORIES</h4>
                        <div className="catAbout">
                            <p>Women</p>
                            <p>Men</p>
                            <p>Shoes</p>
                            <p>Watches</p>
                        </div>
                    </div>
                    <div className="footerCat">
                        <h4>HELP</h4>
                        <div className="catAbout">
                            <p>Track Order</p>
                            <p>Returns</p>
                            <p>Shipping</p>
                            <p>FAQs</p>
                        </div>
                    </div>
                    <div className="footerAbout">
                        <h4>GET IN TOUCH</h4>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <div className="socialMedia">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-pinterest-p"></i>
                        </div>
                    </div>
                    <div className="footerEmail">
                        <h4>NEWSLETTER</h4>
                        <div className="emailSect">
                            <input placeholder='email@example.com' type="text" />
                            <div className="subBtn">SUBSCRIBE</div>
                        </div>
                    </div>
                </div>
                <div className="payment">
                    <div className="paymentImg">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png.webp" alt="" />
                    </div>
                    <div className="copyright">
                        Copyright ©2023 All rights reserved | This template is made with  by Ragnar
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer