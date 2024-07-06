import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="bg-grey">
                <div className="container-fluid ">
                    <div className="row">
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <div className="footer mb-3">
                                <img src="img/logo.png" alt="logo" className='mb-3' style={{ height: "70px" }} />
                                <h4>About Us</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys&apos; standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <div className="footer mb-3">
                                <h4>Company</h4>
                                <ul className="list-links">
                                    <li><Link to="/aboutus">About</Link></li>
                                    <li><Link to="/termsandcondition">Term &amp; Condition</Link></li>
                                    <li><Link to="/contactus">Contact</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <div className="footer mb-3">
                                <h4>Useful Links</h4>
                                <ul className="list-links">
                                    <li><Link to="/StudentDashboard">My Account</Link></li>
                                    <li><Link to="/profile">My Persnal Info</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <div className="footer mb-3">
                                <h4>Get in Touch</h4>
                                <p ><span> <i className="fa fa-map-marker-alt"></i> : 92K Commercial Area Phase-1 DHA Lahore </span> </p>
                                <p><span> </span>
                                </p>
                                <p><span><i className="fa fa-envelope"></i> : support@greengrapez.com</span></p>
                                <p><span><i className="fa fa-phone"></i> : <Link className="mobilesOnly" to="/" > +923244244934</Link></span></p>
                            </div>
                        </div>
                        <p className="mb-0 copyRight"> © 2022 All copy rights reserved ......</p>
                    </div>
                </div>
                <div className="footerBorder"></div>
                <div className='d-flex justify-content-center'>
                    <div className='socialLinks'>
                        <i className='fab fa-facebook me-3'></i>
                        <i className="fab fa-google-plus-g me-3"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
