import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./Testimonials";
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="img/banner.jpg" className="img-fluid" alt="banner" />
          </div>
          <div>
            <img src="img/banner.jpg" className="img-fluid" alt="banner" />
          </div>
          <div>
            <img src="img/banner.jpg" className="img-fluid" alt="banner" />
          </div>
        </Slider>
      </div>

      <div className="trial-btn d-flex justify-content-center align-items-center">
        <Link to="/logintype" className="btn btn-large freetrial">
          Free Trial
        </Link>
      </div>
      <div className="border"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-head pt-4">
              <h3>what is hema math</h3>
              <p className="pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys&apos; standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center pt-4">
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/1.png" alt="" />
              <p>11+ exam improvement tool</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/2.png" alt="" />
              <p>Uses AI and human input to generate maths questions</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/3.png" alt="" />
              <p>Covers full Key Stage 2 syllabus</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/4.png" alt="" />
              <p>Personalised questions</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/5.png" alt="" />
              <p>
                Suitable for students in Year 4 and 5 studying for the 11+ exam
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/6.png" alt="" />
              <p>Unlimited papers</p>
            </div>
          </div>
        </div>
        <div className="trial-btn d-flex justify-content-center">
          <Link to="/logintype" className="btn btn-large freetrial">
            Free Trial
          </Link>
        </div>
      </div>
      <div className="border"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-head pt-4">
              <h3>How will it help you and your child</h3>
              <p className="pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center pt-4">
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/7.png" alt="" />
              <p>Saves Money</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/8.png" alt="" />
              <p>Personalised questions</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/9.png" alt="" />
              <p>Parental reports highlight key weaknesses and strengths</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/4.png" alt="" />
              <p>Worked solutions</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/10.png" alt="" />
              <p>Worked solutions</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/11.png" alt="" />
              <p>Wide variety of questions</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/12.png" alt="" />
              <p>
                Centralised papers and reports ensure you can keep accurate
                track over time
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="services text-center">
              <img src="img/13.png" alt="" />
              <p>
                See how well your child is performing against others in your
                local borough
              </p>
            </div>
          </div>
        </div>
        <div className="trial-btn d-flex justify-content-center">
          <Link to="/logintype" className="btn btn-large freetrial">
            Free Trial
          </Link>
        </div>
      </div>
      <div className="border"></div>
      <Testimonials />
    </>
  );
}

export default Home;
