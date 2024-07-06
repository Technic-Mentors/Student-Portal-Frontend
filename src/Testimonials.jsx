import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import studentImg from "./assets/client1.jfif"
import parentImg from "./assets/client2.jfif"
export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows: false
    };
    return (
        <>
            <div className="container" style={{ backgroundColor: "rgb(249, 250, 252)" }}>
                <div className="row">
                    <div className="section-head pt-4">
                        <h3>Testimonials</h3>
                        <p className="pt-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="slider-container px-5 pb-5 pt-4">
                        <Slider {...settings}>
                            <div>
                                <div className="card" style={{ width: "95%" }}>
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: "bold" }} className="text-center">From Student</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi earum possimus, adipisci obcaecati accusantium ducimus saepe perferendis rem nisi eveniet blanditiis fuga soluta nihil corporis ipsa et dicta nesciunt facere velit sequi! Dolor repellendus, laborum ea magnam, ut consectetur possimus voluptates .</p>
                                        <div className="d-flex align-items-center">
                                            <img src={studentImg} alt="" style={{ height: "80px" }} />
                                            <div>
                                                <h6 style={{ fontWeight: "bold" }}>Evelyn W.</h6>
                                                <p>(Canada Studients Visa)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "95%" }}>
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: "bold" }} className="text-center">From Parents</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi earum possimus, adipisci obcaecati accusantium ducimus saepe perferendis rem nisi eveniet blanditiis fuga soluta nihil corporis ipsa et dicta nesciunt facere velit sequi! Dolor repellendus, laborum ea magnam, ut consectetur possimus voluptates .</p>
                                        <div className="d-flex align-items-center">
                                            <img src={parentImg} alt="" style={{ height: "80px" }} />
                                            <div>
                                                <h6 style={{ fontWeight: "bold" }}>Evelyn W.</h6>
                                                <p>(Canada Studients Visa)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "95%" }}>
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: "bold" }} className="text-center">From Teachers</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi earum possimus, adipisci obcaecati accusantium ducimus saepe perferendis rem nisi eveniet blanditiis fuga soluta nihil corporis ipsa et dicta nesciunt facere velit sequi! Dolor repellendus, laborum ea magnam, ut consectetur possimus voluptates .</p>
                                        <div className="d-flex align-items-center">
                                            <img src={studentImg} alt="" style={{ height: "80px" }} />
                                            <div>
                                                <h6 style={{ fontWeight: "bold" }}>Evelyn W.</h6>
                                                <p>(Canada Studients Visa)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card" style={{ width: "95%" }}>
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: "bold" }}>From Student</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi earum possimus, adipisci obcaecati accusantium ducimus saepe perferendis rem nisi eveniet blanditiis fuga soluta nihil corporis ipsa et dicta nesciunt facere velit sequi! Dolor repellendus, laborum ea magnam, ut consectetur possimus voluptates .</p>
                                        <div className="d-flex align-items-center">
                                            <img src={parentImg} alt="" style={{ height: "80px" }} />
                                            <div>
                                                <h6 style={{ fontWeight: "bold" }}>Evelyn W.</h6>
                                                <p>(Canada Studients Visa)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
